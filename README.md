# SWC with Webpack

## ¿Qué es SWC?

SWC es un transpilador alternativo a Babel, que está escrito en Rust y en comparación entre ambos, SWC es más rápido.

Una de las razones de esto se debe a que Rust tiene un rendimiento óptimo cuando se trata de gestión de memoria, ya que realiza colección de basura en tiempo de compilación y no tiene que estar procesando continuamente.

## ¿Qué es un transpilador y por qué se lo necesita?

JavaScript es un lenguaje de nivel alto, es decir, dicho de una forma más directa, tiene una sintaxis que es muy familiar, legible y entendible a simple vista por una programador. Pero este código no es entendible para la CPU para que lo procese, la CPU sólo comprende código máquina.

Por lo general, para poder traducir el código de JavaScript a código máquina se necesita de un compilador, que realizará ese proceso de traducción. Esto es verdad para lenguajes de bajo nivel como C++, o Rust, entre otros. Pero en el contexto de JavaScript, éste lenguaje no es un lenguaje procesado por compilación sino por [interpretación](<https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)>).

<!-- FIX: corregir la definición -->

¿Y por qué se necesita de un intérprete y no de un compilador en JavaScript? Un compilador al procesar el código, produce un archivo ejecutable. Un intérprete es un tipo de compilador, pero se diferencia de los compiladores tradicionales. Un transpilador para JavaScript, es un compilador que traduce el código moderno de JavaScript a código que es válido para ser ejecutados en el contexto de un navegador, pero no produce un ejecutable como los compiladores tradicionales.

**Nota**: La transpilación no reemplaza la compilación a código máquina, sino que es un proceso previo a la compilación. Ésta compilación que realizan los motores de JavaScript (V8, SpiderMonkey, JavaScriptCore, etc.) se le llama **Just-in-Time (JIT)** el cual mejora el rendimiento. En el caso de los navegadores, cada uno tiene su propio motor de JavaScript, y realiza tanto la transpilación como la compilación JIT automáticamente.

<!-- - TODO: write about How to work with swc -->
<!-- - TODO: write a Comparison with babel -->
<!-- - TODO: hacer un spa sencillo como ejemplo. -->
<!-- - TODO: Agregar unit testing como ej de integracion con swc. -->

> [!NOTE]
> El archivo `webpack.js` está configurado usando módulos ES en vez de de CommonJS. Por defecto, la variable global `__dirname` no está definido en módulos ES. Esto es porque ESM usa un sistema de módulos distinto. La variable global `__dirname` es propio de CommonJS solamente.

Es una buena práctica usar módulos ES y no basarse en `__dirname`, ya que permite compatibilidad entre diferentes entornos y versiones.

Para esto, utilizamos dos módulos de Node.js para poder calcular la ubicación del archivo y del archivo extraer el nombre de la carpeta usando `__dirname`.

> [!IMPORTANT]
> Especifica en el `package.json` el campo `"type": "module"` para poder utilizar módulos ES en el proyecto.

## Resources

- [Logrocket Blog](https://blog.logrocket.com/why-you-should-use-swc/)
