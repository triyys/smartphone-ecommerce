import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../configs/firebase';
import PolicyModel from '../models/PolicyModel';

export default class PolicyController {
    static async getPolicyList() {
        try {
            const allPolicies = [];
            const policyQuerySnapshot = await getDocs(collection(db, 'policies'));

            policyQuerySnapshot.docs.forEach((policy) => {
                allPolicies.push(new PolicyModel(
                    policy.get('name'),
                    policy.get('description'),
                    policy.get('icon'),
                ));
            });

            return allPolicies;
        } catch (error) {
            return null;
        }
    }
}