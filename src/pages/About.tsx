import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonList, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
        <IonList>
          <IonItem routerLink="/home">
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonList>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1> Nikaylia Gayle </h1>
        <h2> Turing Team</h2>
        <img src="src/pictures/NCB Narrative Pic.jpg" height="400" width="auto"></img>
        <p> This is my attempt at using Ionic</p>
      </IonContent>
    </IonPage>
  );
};

export default About;
