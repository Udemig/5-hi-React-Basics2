import Header from './components/Header';
import SpecialButton from './components/SpecialButton';
import { users } from './constants';
import Card from './components/Card';
import { useState } from 'react';

/*
Component(Bileşen)
1- Js fonkşiyonlarından veya es6 classlarından oluşturlur
2- Component ilk harfia her zaman büyük olur
3- Return kısmında jsx döndürür
4- Genelde sayfanın alt kısmında export edilir
5- Jsx içerisine yazılırken self closıing(kendi içerisinde kapanır)
*/

/*
> JSX
> html gibi kodlarımızı yazıyor yalnızca 1-2 farklılık var
> yazılan jsx kodları  arkaplanda js koduna dönüşür
> JSX KURALLARI:
1- Atribute dediğimiz html nitklikleri jsx te farklıdır
> class = className | for = htmlfor | style={{}}
> jsx içerisinde js kodları yazabiliyoruz {} süslü parantezler ile
>  return kısmına yalnızca tek bir Parent(kapsayıcı) eleman olmalı
> jsx de htmlde tek bir etiketten oluşan elemanlar <img>  jsx de  <img />
*/

function App() {
  const kayıtlıKullanıcılar = 13;
  // const isLogedIn = false;
  const isAdmin = true;

  // const [değer, ayarlayacakFonk. ] = useState(başlangıç değeri)
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="App">
      <Header
        users={kayıtlıKullanıcılar}
        setIsLogedIn={setIsLogedIn}
        isLogedIn={isLogedIn}
        isAdmin={isAdmin}
      />
      <SpecialButton
        text="Onayla"
        renk="yesil"
        islev={() => {
          alert('Onaylandı');
        }}
      />
      <SpecialButton
        text="Gönder"
        renk="yesil"
        islev={() => {
          alert('Gönderildi');
        }}
      />
      <SpecialButton text="Tamam" renk="sari" />
      <SpecialButton text="Çıkış" renk="kirmizi" />

      {/* birden çok elemanı ekrana basma (çoklu render) */}
      <div className="cards">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;

// const div = document.createElement("div")
// div.classList.add("class")
// innerhtml
// appendchild
