import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
    console.log('All contacts have been removed.');
  } catch (err) {
    console.error('Error reading or parsing file:', err);
  }
};

removeAllContacts();
