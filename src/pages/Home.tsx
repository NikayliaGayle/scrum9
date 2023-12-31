import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem, IonList, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
        <IonList>
        <IonItem routerLink="/about">
            <IonLabel>About</IonLabel>
          </IonItem>
          <IonItem routerLink="/Products">
            <IonLabel>Products</IonLabel>
          </IonItem>
          </IonList>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1> Welcome </h1>
        <p> This is my attempt at using Ionic</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
