import firebase from '../../configs/firebase';
import SliderModel from '../models/SliderModel';

export default class SliderController {
    static async getSliderList() {
        try {
            const allSliders = [];
            const sliderQuerySnapshot = await firebase.firestore().collection('sliders').get();

            sliderQuerySnapshot.docs.forEach((policy) => {
                allSliders.push(new SliderModel(
                    policy.get('title'),
                    policy.get('description'),
                    policy.get('image'),
                ));
            });

            return allSliders;
        } catch (error) {
            return null;
        }
    }
}