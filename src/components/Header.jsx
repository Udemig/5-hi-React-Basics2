/*
PROPS > Bileşenler arasında haberleşmeyi sağlar
1- HER ZAMAN Yukarıdan aşşağıya gönderilir
2- Prop olarak string,number,array,object,function gönderilebilir

*/

function Header(props) {
  console.log(props);

  return (
    <>
      <header>
        <h1>Logo</h1>
        <nav>
          <a href="">Hakkımızda</a>
          <a href="">İletişim</a>
          <a href="">Ürünler</a>
        </nav>
        <h3>Aktif Kullanıcılar: {props.users}</h3>
        {/*
         terneray operator(? :) koşullu renderlama 
         > ? kısmı eğer islogedin true ise çalışır
         > : kısmı eğer isLogedin false ise çalışır
         */}
        {props.isLogedIn ? (
          // çıkış  yapa tıklanırsa islogedin değerini false yap
          <a onClick={() => props.setIsLogedIn(false)}>Çıkış Yap</a>
        ) : (
          <a onClick={() => props.setIsLogedIn(true)}>Giriş Yap</a>
        )}

        {/* && operatorü ile koşullu renderlama */}
        {props.isAdmin && <a>Admin Paneline Git</a>}
      </header>
    </>
  );
}

export default Header;
