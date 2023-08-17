import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonList} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

import './Home.css';

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
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
        <IonGrid fixed={true}>
            <IonRow>
                <IonCol>
                    <IonCard>
                        <img alt="Cerave Cleanser" src="src/pictures/cleanser.png"/>
                        <IonCardHeader>
                            <IonCardTitle>Cerave Foaming Facial Cleanser</IonCardTitle>
                            <IonCardSubtitle>$12.00</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>This product is suitable for oily skin. It contains Salicylic Acid which is a super ingredient for oil control and exfoliation</IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                            <img alt="Silhouette of mountains" src="src/pictures/moisturiser.png"/>
                            <IonCardHeader>
                                <IonCardTitle>Cerave Daily Moisturizing Lotion</IonCardTitle>
                                <IonCardSubtitle>$8.00</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>This product is suitable for all skin types. It contains Hyaluronic Acid which helps restore the skin barrier.</IonCardContent>
                        </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonCard>
                        <img alt="Silhouette of mountains" src="src/pictures/serum.png"/>
                        <IonCardHeader>
                            <IonCardTitle>The Ordinary Niacinamide Serum</IonCardTitle>
                            <IonCardSubtitle>$10.00</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>This product is suitable for all skin types. It contains Niacinamide which helps minimize pores and improves uneven skin tone.</IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                            <img alt="Silhouette of mountains" src="src/pictures/sunscreen.png"/>
                            <IonCardHeader>
                                <IonCardTitle>Suntouchable Sunscreen</IonCardTitle>
                                <IonCardSubtitle>$25.00</IonCardSubtitle>
                            </IonCardHeader>

                            <IonCardContent>This product is stuitable for all skin types and colours. It is SPF 30 to protect your skin from the harmful rays of the sun.</IonCardContent>
                        </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;