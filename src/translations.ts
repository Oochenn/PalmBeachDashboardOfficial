interface MenuTranslations {
  [key: string]: {
    categories: {
      burgers: string;
      hotDogs: string;
      phillyCheeseSteaks: string;
      makeMac: string;
      menuKids: string;
      appetizers: string;
      sauces: string;
      supplements: string;
      drinks: string;
    };
    items: {
      menu: string;
      single: string;
      pieces: string;
    };
  };
}

export const translations: MenuTranslations = {
  FR: {
    categories: {
      burgers: 'Burgers 🍔',
      hotDogs: 'Hot Dogs 🌭',
      phillyCheeseSteaks: 'Philly Cheese Steaks 🥖',
      makeMac: 'Make-Mac 🧀',
      menuKids: 'Kids 🧒',
      appetizers: 'Entrées 🍟',
      sauces: 'Sauces 🥫',
      supplements: 'Suppléments 🍯',
      drinks: 'Boissons 🥤'
    },
    items: {
      menu: 'Formule',
      single: 'Simple',
      pieces: 'pièces'
    }
  },
  EN: {
    categories: {
      burgers: 'Burgers 🍔',
      hotDogs: 'Hot Dogs 🌭',
      phillyCheeseSteaks: 'Philly Cheese Steaks 🥖',
      makeMac: 'Make-Mac 🧀',
      menuKids: 'Kids 🧒',
      appetizers: 'Appetizers 🍟',
      sauces: 'Sauces 🥫',
      supplements: 'Extras 🍯',
      drinks: 'Drinks 🥤'
    },
    items: {
      menu: 'Combo',
      single: 'Single',
      pieces: 'pieces'
    }
  },
  NL: {
    categories: {
      burgers: 'Burgers 🍔',
      hotDogs: 'Hot Dogs 🌭',
      phillyCheeseSteaks: 'Philly Cheese Steaks 🥖',
      makeMac: 'Make-Mac 🧀',
      menuKids: 'Kids 🧒',
      appetizers: 'Voorgerechten 🍟',
      sauces: 'Sauzen 🥫',
      supplements: 'Extra\'s 🍯',
      drinks: 'Dranken 🥤'
    },
    items: {
      menu: 'Formule',
      single: 'Enkel',
      pieces: 'stuks'
    }
  },
  DE: {
    categories: {
      burgers: 'Burger 🍔',
      hotDogs: 'Hot Dogs 🌭',
      phillyCheeseSteaks: 'Philly Cheese Steaks 🥖',
      makeMac: 'Make-Mac 🧀',
      menuKids: 'Kids 🧒',
      appetizers: 'Vorspeisen 🍟',
      sauces: 'Soßen 🥫',
      supplements: 'Extras 🍯',
      drinks: 'Getränke 🥤'
    },
    items: {
      menu: 'Formule',
      single: 'Einzeln',
      pieces: 'Stück'
    }
  }
};