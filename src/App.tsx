import { useState } from 'react';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('FR');
  const t = translations[language];

  return (
    <div className="page-container">
      <header className="header">
        <h1>Palm Beach</h1>
        <div className="language-selector">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="FR">Français</option>
            <option value="EN">English</option>
            <option value="NL">Nederlands</option>
            <option value="DE">Deutsch</option>
          </select>
        </div>
      </header>
      <div className="menu-grid">
        <div className="menu-card">
          <div className="menu-title">{t.categories.burgers}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Cheese burger</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">
                  {t.items.menu}: {t.items.single} 9€ Double 11€ Triple 12€
                </p>
                <p className="text-sm text-white-300">
                  {t.items.single}: {t.items.single} 6,5€ Double 7€ Triple 8€
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Big War</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 12€</p>
                <p className="text-sm text-white-300">{t.items.single}: 8€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Mac and Cheese</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 14€</p>
                <p className="text-sm text-white-300">{t.items.single}: 10€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Snowfall</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 13,5€</p>
                <p className="text-sm text-white-300">{t.items.single}: 9,5€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Little Italy</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 14€</p>
                <p className="text-sm text-white-300">{t.items.single}: 10€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Vatos Locos</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 11,99€</p>
                <p className="text-sm text-white-300">{t.items.single}: 8,99€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Patser</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 14€</p>
                <p className="text-sm text-white-300">{t.items.single}: 10€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Los Pollos Hermanos</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 11€</p>
                <p className="text-sm text-white-300">{t.items.single}: 7€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Los Galacticos</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 15€</p>
                <p className="text-sm text-white-300">{t.items.single}: 11€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Mac and Cheese Chicken</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 14€</p>
                <p className="text-sm text-white-300">{t.items.single}: 10€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Ocean Drive</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 11€</p>
                <p className="text-sm text-white-300">{t.items.single}: 7€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Cali Veggie</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 11€</p>
                <p className="text-sm text-white-300">{t.items.single}: 7€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.hotDogs}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Time Square</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 13€</p>
                <p className="text-sm text-white-300">{t.items.single}: 9€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Miami Beach</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 13€</p>
                <p className="text-sm text-white-300">{t.items.single}: 9€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Baltimore</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 15€</p>
                <p className="text-sm text-white-300">{t.items.single}: 11€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Melrose</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 14€</p>
                <p className="text-sm text-white-300">{t.items.single}: 10€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.phillyCheeseSteaks}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Cadillac</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 18€</p>
                <p className="text-sm text-white-300">{t.items.single}: 14€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Hummer</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 20€</p>
                <p className="text-sm text-white-300">{t.items.single}: 16€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Camaro</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 19€</p>
                <p className="text-sm text-white-300">{t.items.single}: 15€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Lincoln</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">{t.items.menu}: 19€</p>
                <p className="text-sm text-white-300">{t.items.single}: 15€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.makeMac}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Make-Mac</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">7€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Make-Mac Beef</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">8€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Make-Mac Tenders</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">8€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Make-Mac Nuggets</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">8€</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Make-Mac Dog</p>
              <div className="text-right">
                <p className="text-sm text-cyan-300">8€</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.menuKids}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Hamburger</p>
              <p className="text-sm text-cyan-300">7,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Hot Dog</p>
              <p className="text-sm text-cyan-300">7,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken</p>
              <p className="text-sm text-cyan-300">7,5€</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.appetizers}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Onion Rings (6 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">5€</p>
            </div>
            <div className="flex justify-between">
              <p>Wings (6 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">5€</p>
            </div>
            <div className="flex justify-between">
              <p>Tenders (4 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">4€</p>
            </div>
            <div className="flex justify-between">
              <p>Cheddar Fries</p>
              <p className="text-sm text-cyan-300">3,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Cheddar Bacon Fries</p>
              <p className="text-sm text-cyan-300">4€</p>
            </div>
            <div className="flex justify-between">
              <p>Mozza Sticks (4 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">4€</p>
            </div>
            <div className="flex justify-between">
              <p>Nuggets (5 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">4€</p>
            </div>
            <div className="flex justify-between">
              <p>Jalapenos Cheese (6 {t.items.pieces})</p>
              <p className="text-sm text-cyan-300">5€</p>
            </div>
            <div className="flex justify-between">
              <p>Fries</p>
              <p className="text-sm text-cyan-300">2,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Mac & Cheese</p>
              <p className="text-sm text-cyan-300">3,5€</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.sauces}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>
                Ketchup, Curry Ketchup, Mayonnaise Classic, Mayonnaise Tartare,
                Andalouse, Samouraï, Cocktail, Brazil, Sriracha, Barbecue, US
                Mustard, Toscane, Algérienne, Harissa Burger
              </p>
              <p className="text-sm text-cyan-300">0,5€</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.supplements}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Fried Onions</p>
              <p className="text-sm text-cyan-300">0,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Caramelized Onions</p>
              <p className="text-sm text-cyan-300">0,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Raw Vegetables</p>
              <p className="text-sm text-cyan-300">0,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Cheese</p>
              <p className="text-sm text-cyan-300">0,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Pure Beef Patty</p>
              <p className="text-sm text-cyan-300">1€</p>
            </div>
            <div className="flex justify-between">
              <p>Fried Egg</p>
              <p className="text-sm text-cyan-300">1€</p>
            </div>
            <div className="flex justify-between">
              <p>Bacon</p>
              <p className="text-sm text-cyan-300">1€</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <div className="menu-title">{t.categories.drinks}</div>
          <div className="text-white/90 space-y-2">
            <div className="flex justify-between">
              <p>Drinks</p>
              <p className="text-sm text-cyan-300">2€</p>
            </div>
            <div className="flex justify-between">
              <p>USA Special & Redbull</p>
              <p className="text-sm text-cyan-300">2,5€</p>
            </div>
            <div className="flex justify-between">
              <p>Capri-sun</p>
              <p className="text-sm text-cyan-300">1€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;