import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    contacts = JSON.parse(data);
    if (Array.isArray(contacts)) {
      return contacts.length;
    } else {
      console.error('Data is not an array');
      return 0;
    }
  } catch (err) {
    console.error('Error reading or parsing file:', err);
    return 0;
  }
};

console.log(await countContacts());
