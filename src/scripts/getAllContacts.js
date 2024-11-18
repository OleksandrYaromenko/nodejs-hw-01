import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  let contacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    if (data) {
      try {
        contacts = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        contacts = [];
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn('File not found, returning empty array.');
    } else {
      console.error('Error reading file:', err);
    }
    contacts = [];
  }

  return contacts;
};

console.log(await getAllContacts());
