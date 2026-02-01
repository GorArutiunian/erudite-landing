/**
 * Send form data to Formspree so submissions are emailed to you.
 * Deck: https://formspree.io/f/xaqbozad | Demo: https://formspree.io/f/mzdvrqwo (gor.arutiunia4@gmail.com)
 * Override with VITE_FORMSPREE_DECK_FORM_ID / VITE_FORMSPREE_DEMO_FORM_ID in .env if needed.
 */

const DECK_FORM_ID = (import.meta.env.VITE_FORMSPREE_DECK_FORM_ID as string | undefined) ?? 'xaqbozad';
const DEMO_FORM_ID = (import.meta.env.VITE_FORMSPREE_DEMO_FORM_ID as string | undefined) ?? 'mzdvrqwo';

export function isDeckFormEnabled(): boolean {
  return Boolean(DECK_FORM_ID);
}

export function isDemoFormEnabled(): boolean {
  return Boolean(DEMO_FORM_ID);
}

export async function sendDeckRequest(data: {
  name: string;
  email: string;
  role?: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!DECK_FORM_ID) {
    return { ok: true }; // no endpoint configured, treat as success (dev fallback)
  }
  try {
    const res = await fetch(`https://formspree.io/f/${DECK_FORM_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        role: data.role,
        message: data.message,
        _subject: `Investor Deck Request from ${data.name}`,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || 'Request failed' };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Network error';
    return { ok: false, error: message };
  }
}

export async function sendDemoRequest(data: {
  name: string;
  email: string;
  organization?: string;
  date?: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!DEMO_FORM_ID) {
    return { ok: true };
  }
  try {
    const res = await fetch(`https://formspree.io/f/${DEMO_FORM_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        organization: data.organization,
        date: data.date,
        message: data.message,
        _subject: `Demo Request from ${data.name}`,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || 'Request failed' };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Network error';
    return { ok: false, error: message };
  }
}
