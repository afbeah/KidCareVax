import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  async createVaccine(
    childId: string,
    name: string,
    applicationDate: string,
    status: string,
  ) {
    return addDoc(collection(db, 'vaccines'), {
      childId,
      name,
      applicationDate,
      status,
    });
  }

  async getVaccinesByChild(childId: string) {
    const q = query(
      collection(db, 'vaccines'),
      where('childId', '==', childId),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getAllVaccines() {
    const snapshot = await getDocs(collection(db, 'vaccines'));

    const vaccines = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.table(vaccines);

    return vaccines;
  }
}
