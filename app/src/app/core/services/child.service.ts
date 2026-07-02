import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from '../firebase/firebase.config';
import { auth } from '../firebase/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class ChildService {
  async createChild(name: string, birthDate: string, gender: string) {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuário não autenticado');
    }

    return addDoc(collection(db, 'children'), {
      userId: user.uid,
      name,
      birthDate,
      gender,
    });
  }

  async getChildren() {
    const user = auth.currentUser;

    console.log('Usuário autenticado:', user);

    if (!user) {
      return [];
    }

    const q = query(
      collection(db, 'children'),
      where('userId', '==', user.uid),
    );

    const snapshot = await getDocs(q);

    console.log('Quantidade de crianças:', snapshot.size);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getChildById(id: string) {
    const snapshot = await getDoc(doc(db, 'children', id));

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
}
