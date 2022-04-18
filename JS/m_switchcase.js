let permissao;
permissao='diretor';

switch(permissao){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    default:
    console.log('Usuário não reconhecido')
}