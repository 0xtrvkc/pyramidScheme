function calculateCommission(THB){
    const commissionTable = [
      { min: 0, max: 8074, rate: 0.1 },
      { min: 8075, max: 16149, rate: 0.1 },
      { min: 16150, max: 44999, rate: 0.1 },
      { min: 45000, max: 96899, rate: 0.1 },
      { min: 96900, max: 177649, rate: 0.12 },
      { min: 177650, max: 290699, rate: 0.15 },
      { min: 290700, max: 484499, rate: 0.18 },
      { min: 484500, max: Infinity, rate: 0.21 }
    ];
  
    const commissionRate = commissionTable.find(range => THB >= range.min && THB <= range.max).rate;
    const commission = commissionRate * THB;
    const items = THB/1600;
    
    return `You make ${THB} THB, and you will get ${commission} THB as commission! which means you need to sell ${items} items`;
  }
  
  const calculateBtn = document.querySelector("#calculate-btn");
  const THBInput = document.querySelector("#THB");
  const resultDiv = document.querySelector("#result");
  
  calculateBtn.addEventListener("click", () => {
    const THB = THBInput.value;
    if (!THB || THB < 0) {
      resultDiv.innerText = "Please enter a valid THB amount.";
      return;
    }
    
    const commission = calculateCommission(THB);
    resultDiv.innerText = commission;
  });
  
