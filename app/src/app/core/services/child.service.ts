import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

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

    if (!user) {
      return [];
    }

    const q = query(
      collection(db, 'children'),
      where('userId', '==', user.uid),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getFirstChild() {
    const children = await this.getChildren();

    return children[0];
  }
}
