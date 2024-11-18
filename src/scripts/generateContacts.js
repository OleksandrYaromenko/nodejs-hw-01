import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts = [];
    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(data) || [];
    } catch (err) {
      contacts = [];
    }

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    contacts = [...contacts, ...newContacts];

    const updatedData = JSON.stringify(contacts);
    await fs.writeFile(PATH_DB, updatedData, 'utf8');
    console.log('Contacts updated successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(5);
