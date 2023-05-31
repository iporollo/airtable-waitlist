import fetch from 'node-fetch';
import { env } from 'src/env.mjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = JSON.parse(req.body);

    const submitLink = async () => {
      try {
        const res = await fetch(
          `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${env.AIRTABLE_TABLE_ID}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${env.AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              records: [
                {
                  fields: {
                    [env.AIRTABLE_TABLE_EMAIL_FIELD]: email,
                  },
                },
              ],
            }),
          }
        );
        if (res.status !== 200) {
          throw new Error('Failed to submit');
        }
        return { success: true };
      } catch (err: any) {
        console.log(err);
        res.status(500).json({ error: err });
      }
    };

    submitLink()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }
}
