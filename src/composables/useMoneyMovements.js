import { ref } from "vue";
import moneyMovementsApi from "../api/money-movements/moneyMovements";

const useMoneyMovements = () => {
  const movements = ref([]);
  const rows = ref([]);
  const getMovements = () => {
    moneyMovementsApi.getMovements().then((response) => {
      movements.value = response.data._embedded.moneyMovements;
      rows.value = movements.value.map((movement) => {
        return {
          name: movement.category,
          total: movement.amount,
        };
      });
    });
  };
  getMovements();
  return {
    movements,
    rows,
  };
};

export default useMoneyMovements;