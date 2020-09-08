import React, { useEffect, useState } from 'react';
import { Snapshot, useGotoRecoilSnapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil';
import { Card } from './ui/Card';
import { Text } from './ui/Text';

interface TimestampedSnapshot {
  snapshot: Snapshot;
  timestamp: number;
}

export const TimeTravelObserver = () => {
  const [snapshots, setSnapshots] = useState<TimestampedSnapshot[]>([]);
  const [show, setShow] = useState(false);

  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    setSnapshots([...snapshots, { timestamp: Date.now(), snapshot }]);
  });

  const goToSnapshot = useGotoRecoilSnapshot();

  useEffect(() => {
    const listen = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'D') {
        setShow((v) => !v);
      }
    };

    document.addEventListener('keydown', listen);

    return () => {
      document.removeEventListener('keydown', listen);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Card>
      <Text gutter variant="subtitle">
        Snapshot List (newest to oldest)
      </Text>
      <ul style={{ maxHeight: 150, overflow: 'auto' }}>
        {[...snapshots].reverse().map((snapshot) => (
          <li key={snapshot.timestamp} style={{ marginBottom: '0.5rem' }}>
            <span style={{ marginRight: '1rem' }}>Snapshot Timestamp: {snapshot.timestamp}</span>
            <button onClick={() => goToSnapshot(snapshot.snapshot)}>Restore</button>
          </li>
        ))}
      </ul>
    </Card>
  );
};
