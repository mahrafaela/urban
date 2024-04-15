console.log("#####Empresa urban#####")

let funcionarios  = ['Joao','Maria','Camila','Ana','Pedro','Laura','Tiago','Mariana','Matheus','Sofia'];

console.log(funcionarios)

funcionarios.push('Mateus');
funcionarios.push('Isabela');
funcionarios.push('Rafael');
funcionarios.push('Camila Fernandes');

console.log(funcionarios)

funcionarios.splice(2,1); //Camila se demitiu
funcionarios.splice(4,1);//Laura foi para Curitiba
funcionarios.push('Vitoria'); //Vitoria chegou na empresa
funcionarios.push('Rafael'); //Rafael foi promovido 

console.log(funcionarios)

let funcionarios_sem_duplicidade = [... new Set(funcionarios)]

console.log(funcionarios_sem_duplicidade) 
