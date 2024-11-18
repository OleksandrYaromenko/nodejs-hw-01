import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
      console.log('The last contact has been removed');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (err) {
    console.error('Error reading or parsing file:', err);
  }
};

removeLastContact();
