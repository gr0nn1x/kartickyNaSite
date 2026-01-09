dyz budete mit otazky na doplneni tak na mojim githubu, v rootu je questions.json, poslete mi na dc otazku v tom formatu a ja to tam doplnim

Tady to je ->[Karticky na site](https://karticky-na-site.vercel.app/)



[
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Konvexní funkce na intervalu I",
    "odpoved": "Pro všechna x1, x2 z I leží graf funkce POD nebo NA úsečce spojující body [x1, f(x1)] a [x2, f(x2)]. Pomocí derivace: f''(x) >= 0."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Konkávní funkce na intervalu I",
    "odpoved": "Pro všechna x1, x2 z I leží graf funkce NAD nebo NA úsečce spojující body [x1, f(x1)] a [x2, f(x2)]. Pomocí derivace: f''(x) <= 0."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Inflexní bod",
    "odpoved": "Bod, ve kterém je funkce spojitá a mění se v něm charakter funkce z konvexní na konkávní (nebo naopak)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Sudá funkce",
    "odpoved": "Pro všechna x z D(f) platí f(-x) = f(x). Graf je souměrný podle osy y."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Lichá funkce",
    "odpoved": "Pro všechna x z D(f) platí f(-x) = -f(x). Graf je souměrný podle počátku."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Rostoucí funkce na intervalu",
    "odpoved": "Pro všechna x1 < x2 platí f(x1) < f(x2)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Klesající funkce na intervalu",
    "odpoved": "Pro všechna x1 < x2 platí f(x1) > f(x2)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Prostá funkce",
    "odpoved": "Pro každá dvě různá x1, x2 platí f(x1) se nerovná f(x2)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Inverzní funkce",
    "odpoved": "Funkce f^(-1), pro kterou platí y = f(x) <=> x = f^(-1)(y). Existuje pouze k prosté funkci."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Definice: Hladká funkce",
    "odpoved": "Funkce, která má na daném intervalu spojitou derivaci."
  },
  {
    "okruh": "Základy a Relace",
    "otazka": "Rozdíl mezi binární relací a zobrazením",
    "odpoved": "Relace je libovolná podmnožina A x B. Zobrazení je relace, kde každému x odpovídá právě jedno y."
  },
  {
    "okruh": "Limity",
    "otazka": "Definice: Limita funkce pro x -> nekonečno",
    "odpoved": "Lim f(x) = L, jestliže pro každé epsilon > 0 existuje K, že pro všechna x > K je |f(x) - L| < epsilon."
  },
  {
    "okruh": "Limity",
    "otazka": "Definice: Vlastní limita funkce v bodě a",
    "odpoved": "Lim f(x) = L, jestliže pro každé epsilon > 0 existuje delta > 0, že pro 0 < |x-a| < delta je |f(x) - L| < epsilon."
  },
  {
    "okruh": "Derivace",
    "otazka": "Definice: Jednostranná derivace v bodě a zprava",
    "odpoved": "Limita podílu (f(x)-f(a))/(x-a) pro x blížící se k a zprava (x -> a+)."
  },
  {
    "okruh": "Derivace",
    "otazka": "Geometrický význam 1. derivace",
    "odpoved": "Směrnice tečny ke grafu funkce v daném bodě."
  },
  {
    "okruh": "Derivace",
    "otazka": "Pojem: Tečna ke grafu funkce",
    "odpoved": "Přímka, která nejlépe aproximuje funkci v okolí bodu dotyku. Její směrnice je rovna derivaci v bodě."
  },
  {
    "okruh": "Derivace",
    "otazka": "Pojem: Normála ke grafu funkce",
    "odpoved": "Přímka kolmá na tečnu v bodě dotyku."
  },
  {
    "okruh": "Integrály",
    "otazka": "Definice: Primitivní funkce F k f na I",
    "odpoved": "Funkce F, pro kterou platí F'(x) = f(x) pro všechna x z I."
  },
  {
    "okruh": "Integrály",
    "otazka": "Definice: Neurčitý integrál",
    "odpoved": "Množina všech primitivních funkcí k funkci f. Zápis: Int f(x) dx = F(x) + C."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Definice: Lokální maximum v bodě a",
    "odpoved": "Existuje okolí U(a), že pro všechna x z U(a) platí f(x) <= f(a)."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Věta: Souvislost 2. derivace a konvexnosti",
    "odpoved": "Je-li f''(x) > 0 na I, je f ryze konvexní. Je-li f''(x) < 0 na I, je f ryze konkávní."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Věta: Souvislost 2. derivace a lokálního extrému ve stacionárním bodě",
    "odpoved": "Je-li f'(a)=0 a f''(a) > 0 -> lokální MINIMUM. Je-li f'(a)=0 a f''(a) < 0 -> lokální MAXIMUM."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Věta: Vztah 1. derivace a monotonie",
    "odpoved": "f'(x) > 0 -> rostoucí. f'(x) < 0 -> klesající."
  },
  {
    "okruh": "Integrály",
    "otazka": "Vzorec: Integrace per-partes",
    "odpoved": "Int u(x)*v'(x) dx = u(x)*v(x) - Int u'(x)*v(x) dx."
  },
  {
    "okruh": "Limity",
    "otazka": "Pravidlo: L'Hospitalovo pravidlo a jeho předpoklady",
    "odpoved": "Platí pro limity typu '0/0' nebo 'nekonečno/nekonečno'. Limita podílu funkcí se rovná limitě podílu jejich derivací."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Věta: O hodnotách spojité funkce bez nulových bodů",
    "odpoved": "Je-li f spojitá na intervalu I a nemá zde nulový bod, pak na celém I nemění znaménko (je stále kladná nebo stále záporná)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Důkaz: Věta o hodnotách spojité fce bez nulových bodů",
    "odpoved": "Sporem: Kdyby měnila znaménko (byla + i -), musela by podle Bolzanovy věty nabývat hodnoty 0, což je spor s předpokladem."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Podmínka: Nutná podmínka lokálního extrému",
    "odpoved": "Má-li f v bodě a lokální extrém a existuje derivace, pak f'(a) = 0."
  },
  {
    "okruh": "Extrémy a Průběh",
    "otazka": "Podmínka: Postačující podmínka lokálního extrému",
    "odpoved": "Změna znaménka 1. derivace v bodě (z + na - je maximum, z - na + je minimum) NEBO nenulová 2. derivace."
  },
  {
    "okruh": "Integrály",
    "otazka": "Metoda: Princip substituce (1. druh)",
    "odpoved": "Zavedeme t = g(x), dt = g'(x)dx. Integrál převedeme na proměnnou t."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Metoda: Bolzanova věta a půlení intervalů",
    "odpoved": "Pokud je f spojitá na <a,b> a f(a)*f(b) < 0, existuje kořen. Interval dělíme napůl a vybíráme tu část, kde se liší znaménka krajních bodů."
  },
  {
    "okruh": "Derivace",
    "otazka": "Příklad: Tečna bez směrnicového tvaru",
    "odpoved": "Funkce y = 3. odmocnina z x v bodě 0. Tečnou je osa y (x=0), derivace je nevlastní."
  },
  {
    "okruh": "Polynomy a řady",
    "otazka": "Vztah: Derivace Taylorova polynomu a funkce",
    "odpoved": "k-tá derivace Taylorova polynomu v bodě středu je rovna k-té derivaci funkce f v tomtéž bodě."
  },
  {
    "okruh": "Polynomy a řady",
    "otazka": "Vlastnost: Maclaurinův polynom liché funkce",
    "odpoved": "Obsahuje pouze liché mocniny x (x, x^3, x^5...)."
  },
  {
    "okruh": "Polynomy a řady",
    "otazka": "Vlastnost: Maclaurinův polynom sudé funkce",
    "odpoved": "Obsahuje pouze sudé mocniny x (1, x^2, x^4...)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Příklad: Lichá funkce, konkávní na (-a, 0). Jaká je na (0, a)?",
    "odpoved": "Konvexní. (Lichost převrací hodnoty i 'zakřivení')."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Skládání funkcí: f sudá, g lichá. Jaká je f složeno s g?",
    "odpoved": "SUDÁ. (f 'požere' znaménko z g)."
  },
  {
    "okruh": "Vlastnosti funkcí",
    "otazka": "Skládání funkcí: f rostoucí, g klesající. Jaká je f složeno s g?",
    "odpoved": "KLESAJÍCÍ."
  },
  {
    "okruh": "Integrály",
    "otazka": "Integrály: Kolik existuje primitivních funkcí?",
    "odpoved": "Nekonečně mnoho, liší se o aditivní konstantu C."
  },
  {
    "okruh": "Integrály",
    "otazka": "Integrály: Má-li f lichou primitivní funkci F, jaká je f?",
    "odpoved": "SUDÁ. (Derivace liché funkce je sudá)."
  },
  {
    "okruh": "Základy a Relace",
    "otazka": "Grafika: Jak poznat zobrazení z grafu relace?",
    "odpoved": "Test svislé přímky: Žádná svislá přímka nesmí protnout graf více než jednou."
  },
  {
    "okruh": "Logika",
    "otazka": "Logika: Negace výroku 'Pro každou funkci platí...'",
    "odpoved": "'Existuje alespoň jedna funkce, pro kterou neplatí...'"
  },
  {
    "okruh": "Logika",
    "otazka": "Logika: Negace výroku A => B",
    "odpoved": "A platí a zároveň B neplatí (A & non B)."
  },
  {
    "okruh": "Logika",
    "otazka": "Logika: Obměna výroku A => B",
    "odpoved": "non B => non A (má stejnou pravdivostní hodnotu)."
  },
  {
    "okruh": "Příklady",
    "otazka": "Příklad: Je y = ln|x| sudá nebo lichá?",
    "odpoved": "SUDÁ."
  },
  {
    "okruh": "Příklady",
    "otazka": "Příklad: Monotonie x^4 - x^2 na (0, 1/sqrt(2))",
    "odpoved": "KLESAJÍCÍ. (Derivace je zde záporná)."
  },
  {
    "okruh": "Příklady",
    "otazka": "Příklad: Primitivní funkce k x^3 - sin(x)",
    "odpoved": "x^4/4 + cos(x) + C."
  },
  {
    "okruh": "Příklady",
    "otazka": "Příklad: Limita ln(x)/x^2 pro x -> nekonečno",
    "odpoved": "0 (L'Hospital 1/x lomeno 2x)."
  },
  {
    "okruh": "Příklady",
    "otazka": "Příklad: Rovnice tečny y=tan(x) v bodě 0",
    "odpoved": "y = x."
  }
]
