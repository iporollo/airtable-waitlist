# Airtable Powered Waitlist Landing Page

This is a waitlist landing page that is powered by Airtable.

App created with https://create.t3.gg/

## Getting started

1. Clone this repo
2. Run `yarn`
3. Copy `.env.example` to `.env` and fill in the values

```
AIRTABLE_API_KEY=<your_api_key>
AIRTABLE_BASE_ID=<your_base_id>
AIRTABLE_TABLE_ID=<your_table_id>
AIRTABLE_TABLE_EMAIL_FIELD=Email
```

Note:
To get your API key, go to https://airtable.com/create/apikey
To get your BASE_ID and your TABLE_ID, go to https://airtable.com/developers/web/api/introduction and select your base, then find the appropriate values.
To get your EMAIL_FIELD, create a column in airtable with a name and use that name as the variable.

4. Run `yarn dev` to start the dev server
5. Enter an email into the form and submit
6. Check your Airtable base to see the new record
