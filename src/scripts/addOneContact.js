import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(data) || [];
    } catch (err) {
      contacts = [];
    }
    const newContact = createFakeContact();
    contacts.push(newContact);
    const updatedData = JSON.stringify(contacts);
    await fs.writeFile(PATH_DB, updatedData, 'utf8');
    console.log('New contacts has been successfuly added.');
  } catch (err) {
    console.error('Error:', err);
  }
};

addOneContact();