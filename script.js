function register(){

    uname=reg_name.value
    acno=reg_id.value
    pswd=reg_pswd.value
    
    acnoDetails={
        acno,
        uname,
        pswd
    }
    
    if(acno in localStorage){
        alert("Account number already present")
    }
    else{
        localStorage.setItem(acno,JSON.stringify(acnoDetails))
        alert("Account registration successful")
        window.location="./index.html"
    }
    }
    
    
    
    
    function login(){

    acno=login_id.value
    pswd=login_pswd.value
    //2 check if the account number is present in localstorage
    if(acno in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(acno))
        if(pswd==acnoDetails.pswd){
            alert("login successful")
            window.location="./home.html"
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("Account number not present")
    }
    
    }
    
    function signup(){
        window.location="./register.html"
    }

    function addIncome(){
    
        income=incomeName.value;
        incomeAmount=incomeAmt.value;
        if(income==""){
            alert('please enter the income title')
        }
        else if(incomeAmount==0){
            alert('please enter the income amount')
        }
        else{
            tableData=` 
             <tr >
                <td>${income}</td>
                <td>${incomeAmount}</td>
                
             </tr>`
                document.getElementById('incomeRow').innerHTML+=tableData;
                addBalance()
            }
                
            
          
        }
        
        document.getElementById("balanceScreen").value=0;
        var balanceAMT = parseInt(document.getElementById("balanceScreen").value);
        function addBalance(){
            incomeAMT = parseInt(document.getElementById("incomeAmt").value )
            
            balance=(balanceAMT+=incomeAMT )
            if(balance==0){
                alert("please enter the value")
            }
            else{
            document.getElementById("balanceScreen").value = balance;
            }
        }
        
        function subBalance(){
            expAMT = parseInt(document.getElementById("expenseAmt").value )
            balance=parseInt(balanceAMT-=expAMT )
            document.getElementById("balanceScreen").value = balance;
        
        
        }
        function addExpense(){
            expense=expenseName.value;
            expenseAmount=expenseAmt.value;
            if(expense==""){
                alert('Please enter the expense title');
            }
            else if(expenseAmount==0){
                alert('Please enter the expense amount');
            }
            else{
            tabledata=` 
             <tr >
                <td>${expense}</td>
                <td>${expenseAmount}</td>
                
            </tr>`
                document.getElementById('expenseRow').innerHTML+=tabledata;
                subBalance()
            }
        
                
        }
        function clearAll(){
            incomeTable.innerHTML = `<h4 style="color: darkgreen;" class="text-center">Income</h4>
            <table class="bg-success mt-3">
                <th style=" padding-right: 425px; color: whitesmoke;">Income name</th>
                <th style="color: whitesmoke;">Amount</th>
                <tbody id="incomeRow">

                </tbody>
            </table>
            `
            expenseTable.innerHTML = `<h4 style="color: darkred;" class="text-center">Expense</h4>
            <table class="bg-danger mt-3">
                <th style="padding-right: 425px; color: whitesmoke;">Expense name</th>
                <th style="color: whitesmoke;">Amount</th>
                <tbody id="expenseRow"></tbody>
            </table>`
        
        }