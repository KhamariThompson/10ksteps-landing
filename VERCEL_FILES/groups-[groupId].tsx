// File: pages/groups/[groupId].tsx
// This is a Next.js page for your Vercel deployment
// Place this in: pages/groups/[groupId].tsx

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface GroupData {
  name: string;
  groupDescription?: string;
  logoEmoji?: string;
  logoImageURL?: string;
  participantIds: string[];
  endDate: { seconds: number };
  type: string;
  strictness: string;
}

export default function GroupPage() {
  const router = useRouter();
  const { groupId } = router.query;
  const [groupData, setGroupData] = useState<GroupData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!groupId) return;

    // Fetch group data from Firebase
    fetchGroupData(groupId as string);
  }, [groupId]);

  const fetchGroupData = async (id: string) => {
    try {
      // REPLACE WITH YOUR FIREBASE CONFIG
      const FIREBASE_PROJECT_ID = 'YOUR_FIREBASE_PROJECT_ID';

      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/challenges/${id}`
      );

      if (!response.ok) {
        throw new Error('Group not found');
      }

      const data = await response.json();

      // Parse Firestore document format
      const groupData: GroupData = {
        name: data.fields.name?.stringValue || 'Unknown Group',
        groupDescription: data.fields.groupDescription?.stringValue,
        logoEmoji: data.fields.logoEmoji?.stringValue,
        logoImageURL: data.fields.logoImageURL?.stringValue,
        participantIds: data.fields.participantIds?.arrayValue?.values?.map((v: any) => v.stringValue) || [],
        endDate: data.fields.endDate?.timestampValue
          ? { seconds: new Date(data.fields.endDate.timestampValue).getTime() / 1000 }
          : { seconds: Date.now() / 1000 },
        type: data.fields.type?.stringValue || 'sevenDay',
        strictness: data.fields.strictness?.stringValue || 'chill',
      };

      setGroupData(groupData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching group:', err);
      setError('Group not found');
      setLoading(false);
    }
  };

  const openInApp = () => {
    // Try to open in app using Universal Link
    window.location.href = `https://10ksteps.site/groups/${groupId}`;
  };

  const downloadApp = () => {
    // Redirect to App Store
    window.location.href = 'https://apps.apple.com/app/YOUR_APP_ID';
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (error || !groupData) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <h1>Group Not Found</h1>
          <p>This group may have been deleted or the link is invalid.</p>
        </div>
      </div>
    );
  }

  const daysRemaining = Math.max(
    0,
    Math.floor((groupData.endDate.seconds - Date.now() / 1000) / 86400)
  );

  return (
    <>
      <Head>
        <title>{groupData.name} - 10k Steps</title>
        <meta name="description" content={groupData.groupDescription || `Join ${groupData.name} on 10k Steps!`} />

        {/* Smart App Banner for iOS */}
        <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content={groupData.name} />
        <meta property="og:description" content={groupData.groupDescription || 'Join my walking group!'} />
        <meta property="og:image" content="https://10ksteps.site/og-image.png" />
        <meta property="og:url" content={`https://10ksteps.site/groups/${groupId}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={groupData.name} />
        <meta name="twitter:description" content={groupData.groupDescription || 'Join my walking group!'} />
      </Head>

      <div style={styles.container}>
        <div style={styles.card}>
          {/* Group Logo */}
          <div style={styles.logoContainer}>
            {groupData.logoEmoji ? (
              <div style={styles.emoji}>{groupData.logoEmoji}</div>
            ) : groupData.logoImageURL ? (
              <img src={groupData.logoImageURL} alt="Group logo" style={styles.logoImage} />
            ) : (
              <div style={styles.defaultLogo}>👥</div>
            )}
          </div>

          {/* Group Name */}
          <h1 style={styles.groupName}>{groupData.name}</h1>

          {/* Description */}
          {groupData.groupDescription && (
            <p style={styles.description}>{groupData.groupDescription}</p>
          )}

          {/* Stats */}
          <div style={styles.stats}>
            <div style={styles.stat}>
              <div style={styles.statValue}>{groupData.participantIds.length}</div>
              <div style={styles.statLabel}>Members</div>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.stat}>
              <div style={styles.statValue}>{daysRemaining}</div>
              <div style={styles.statLabel}>Days Left</div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={styles.actions}>
            <button onClick={openInApp} style={{...styles.button, ...styles.primaryButton}}>
              Open in App
            </button>
            <button onClick={downloadApp} style={{...styles.button, ...styles.secondaryButton}}>
              Download 10k Steps
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Walking is easier together 🚶</p>
        </div>
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '40px 32px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  logoContainer: {
    marginBottom: '24px',
  },
  emoji: {
    fontSize: '80px',
    lineHeight: 1,
  },
  logoImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  defaultLogo: {
    fontSize: '60px',
  },
  groupName: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1a1a1a',
    margin: '0 0 16px 0',
  },
  description: {
    fontSize: '17px',
    color: '#666',
    margin: '0 0 32px 0',
    lineHeight: 1.5,
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    padding: '24px',
    background: '#f5f5f5',
    borderRadius: '12px',
    marginBottom: '32px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
  },
  divider: {
    width: '1px',
    height: '40px',
    background: '#ddd',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  button: {
    padding: '16px 24px',
    borderRadius: '12px',
    fontSize: '17px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, opacity 0.2s',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
  },
  secondaryButton: {
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
  },
  loading: {
    fontSize: '24px',
    color: 'white',
  },
  error: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '40px',
    textAlign: 'center',
  },
  footer: {
    marginTop: '32px',
    color: 'white',
    opacity: 0.8,
    fontSize: '15px',
  },
};
