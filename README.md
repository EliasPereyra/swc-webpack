# SWC with Webpack

Este un proyecto con fines de aprendizaje, para entender cómo funcionan las cosas desde sus fundamentos. Aunque no se ve las cosas a bajo nivel (para realmente afirmar que es desde sus fundamentos), la idea es entender por qué un proyecto se basa en ciertas librerías como sus bases principales, cómo está configurado y qué beneficios me provee usar tales librerías, creando el proyecto archivo por archivo.

## ¿Qué es SWC?

SWC es un transpilador alternativo a Babel, que está escrito en Rust y en comparación entre ambos, SWC es más rápido.

Una de las razones de esto se debe a que Rust tiene un rendimiento óptimo cuando se trata de gestión de memoria, ya que realiza colección de basura en tiempo de compilación y no tiene que estar procesando continuamente.

## Comencemos con los conceptos para poder avanzar, ¿qué es un transpilador y por qué se lo necesita?

**JavaScript** es un lenguaje de nivel alto, es decir, dicho de una forma más directa, tiene una sintaxis que es muy familiar, legible y entendible a simple vista por una programador, pero este código no es entendible para la CPU para que lo procese. La CPU sólo comprende código máquina.

Por lo general, para poder traducir el código de JavaScript a código máquina se necesita de un compilador, que realizará ese proceso de traducción. Esto es verdad para lenguajes de bajo nivel como **C++**, o **Rust**, entre otros. Pero en el contexto de JavaScript, este lenguaje no es un lenguaje procesado por compilación sino por [interpretación](<https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)>).

<!-- FIX: corregir la definición -->

**¿Y por qué se necesita de un intérprete y no de un compilador tradicional en JavaScript?** Un compilador tradicional al procesar el código, produce un archivo ejecutable, pero un navegador no necesita de un ejecutable, sino de código.

Un intérprete es un tipo de compilador, pero se diferencia de los compiladores tradicionales. Un **transpilador** para JavaScript, es un compilador que traduce el código moderno de JavaScript a código que es válido para ser ejecutados en el contexto de un navegador (en el caso del desarrollo web), a través de un motor (como **V8**) pero no produce un ejecutable como los compiladores tradicionales.

> [!NOTE]
> La transpilación no reemplaza la compilación a código máquina, sino que es un proceso previo a la compilación. Ésta compilación que realizan los motores de JavaScript (V8, SpiderMonkey, JavaScriptCore, etc.) se le llama **Just-in-Time (JIT)**, el cual mejora el rendimiento. En el caso de los navegadores, cada uno tiene su propio motor de JavaScript, y realiza tanto la transpilación como la compilación JIT automáticamente.

## ¿Cómo comenzar a trabajar con swc?

Para poder comenzar a usar swc en nuestro proyecto, debemos instalar dos paquetes: `@swc/core` y `@swc/cli`.

```bash
  npm i -D @swc/core @swc/cli
```

Luego creamos un archivo llamado `.swcrc`, donde estará la configuración que será usado para procesar todos los archivos que le indiquemos, por ej., si queremos procesar archivos **JSX** o **TypeScript**.

Ahora para que sea ejecutado esta configuración, debemos especificarlo en el empaquetador que estemos usando, en este caso sería **Wepback**. Utilizamos un _plugin_ llamado `swc-loader`. Este es el que procesará y hará la transpilación de los archivos que sean `.js` o `.jsx`.

¿Pero por qué JSX específicamente? En este proyecto utilizamos la librería llamada **React.js**, que utiliza la sintaxis [**JSX**](https://facebook.github.io/jsx/).

<!-- - TODO: write a Comparison with babel -->

## Aclaraciones de ciertos aspectos del proyecto

El archivo `webpack.js` está configurado usando **módulos ES** en vez de de **CommonJS**. Por defecto, la variable global `__dirname` no está definido en módulos ES. Esto es porque ESM usa un sistema de módulos distinto. La variable global `__dirname` es propio de CommonJS solamente.

Es una buena práctica usar módulos ES y no basarse en `__dirname`, ya que permite compatibilidad entre diferentes entornos y versiones.

Esto es necesario para que Webpack sepa dónde está el archivo principal y en qué carpeta debe guardar los archivos procesados.

> [!NOTE]
> Desde la [versión v22.11.0](https://nodejs.org/en/blog/release/v20.11.0), para los módulos ES ya no hace falta usar el módulo `node:url` ni `node:path`, sino que simplemente usando `import.meta.filename` obtienes la ruta completa del archivo y `import.meta.dirname` la ruta completa de la carpeta contenedora del archivo, [aquí está explicado](https://github.com/nodejs/node/pull/48740).

Como alternativa, y también con versiones anteriores a `v22.11.0` puedes realizar el boilerplate para que funcione de la misma forma en módulos ES, para resolver una ruta absoluta, sea del archivo o de la carpeta que lo contiene.

Para este proyecto, para resolver la ruta `src`, necesitabamos hacer esto:

```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "src");
```

## Aclaraciones

> [!IMPORTANT]
> Especifica en el `package.json` el campo `"type": "module"` para poder utilizar módulos ES en el proyecto.

## Resources

- [Logrocket Blog](https://blog.logrocket.com/why-you-should-use-swc/)
