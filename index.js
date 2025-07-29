const core=require('@actions/core')
try {
    
    const nombre = core.getInput('nombre');
    const apellido = core.getInput('apellido');
    const edad = parseInt(core.getInput('edad'));
    const MAYORIA_EDAD = 18;
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Edad: ${edad}`);
    const tiempo = edad - MAYORIA_EDAD;
  
    if (tiempo > 0) {
      console.log(`${nombre} ${apellido} cumplió la mayoría de edad hace ${tiempo} años.`);
    } else {
      console.log(`${nombre} ${apellido} aún no cumple la mayoría de edad`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }