import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    function (income) {
      return `$${income}`;
    },
    function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
