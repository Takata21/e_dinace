export default function page() {
  return (
    <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-5">
      <h2 class="text-2xl font-bold mb-4">Significado de las Columnas:</h2>

      <h3 class="text-xl font-bold mb-2">TIEMPO</h3>
      <p class="mb-4">
        Los tiempos ANTES de 1962 son UT1, un tiempo solar medio relacionado con
        el anterior GMT, que ahora está obsoleto. Los tiempos DESPUÉS de 1962
        están en UTC, la escala de tiempo civil actual. UTC se mantiene dentro
        de 0.9 segundos de UT1 utilizando segundos bisiestos enteros para los
        años 1972 en adelante.
      </p>

      <p class="mb-4">
        La conversión desde el Tiempo Dinámico Bariocéntrico Interno (TDB) de la
        dinámica del sistema solar a la escala de tiempo civil no uniforme UT
        solicitada para la salida no se ha determinado para los tiempos UTC
        después del próximo 1 de julio o 1 de enero. Por lo tanto, se utiliza el
        último segundo bisiesto conocido como una constante en intervalos
        futuros.
      </p>

      <p class="mb-4">
        Las etiquetas de tiempo se refieren a la conversión de la escala de
        tiempo UT desde TDB en la Tierra, independientemente de la ubicación del
        observador dentro del sistema solar, aunque las tasas de reloj pueden
        diferir debido al campo de gravedad local y no se puede definir un
        análogo a &quot;UT&quot; para esa ubicación.
      </p>

      <p class="mb-4">
        Cualquier símbolo &apos;b&apos; en la primera columna denota una fecha
        antes de Cristo. Un espacio en la primera columna (&quot; &quot;) denota
        una fecha después de Cristo.
      </p>

      <h3 class="text-xl font-bold mb-2">SISTEMA DE CALENDARIO</h3>
      <p class="mb-4">
        El modo de calendario mixto estaba activo de modo que las fechas del
        calendario después del 15 de octubre de 1582 (si las hay) están en el
        sistema gregoriano moderno. Las fechas anteriores al 5 de octubre de
        1582 (si las hay) están en el sistema juliano, que se extiende
        automáticamente para fechas anteriores a su adopción el 1 de enero del
        año -45. El calendario juliano es útil para emparejar fechas históricas.
        El calendario gregoriano se corresponde más precisamente con el
        movimiento orbital y las estaciones de la Tierra. Un modo de calendario
        &quot;solo gregoriano&quot; está disponible si tales eventos físicos son
        de interés principal.
      </p>

      <p class="mb-4">
        NOTA:&quot;n.a.&quot; en la salida significa que la cantidad no está
        disponible en el momento de la impresión.
      </p>

      <h3 class="text-xl font-bold mb-2">
        PRESENCIA SOLAR (SITIO DE OBSERVACIÓN)
      </h3>
      <p class="mb-4">
        La etiqueta de tiempo va seguida de un espacio y luego un símbolo de
        presencia solar:
      </p>

      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">
          &apos;*&apos; Diurno (limbo solar refractado en o por encima del
          horizonte aparente)
        </li>
        <li class="mb-2"> &apos;C&apos; Crepúsculo civil/amanece</li>
        <li class="mb-2"> &apos;N&apos; Crepúsculo náutico/amanece</li>
        <li class="mb-2"> &apos;A&apos; Crepúsculo astronómico/amanece</li>
        <li class="mb-2"> &apos; &apos; Noche O ephemeris geocéntrico</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">
        PRESENCIA LUNAR (SITIO DE OBSERVACIÓN)
      </h3>
      <p>
        El símbolo de presencia solar es seguido inmediatamente por un símbolo
        de presencia lunar:
      </p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">
          &apos;m&apos; Limbo superior refractado de la Luna en o por encima del
          horizonte aparente
        </li>
        <li class="mb-2">
          Limbo superior refractado de la Luna por debajo del horizonte aparente
          O efemérides geocéntricas
        </li>
      </ul>

      <h3 class="text-xl font-bold mb-2">R.A._(ICRF), DEC__(ICRF), =</h3>
      <p class="mb-4">
        Ascensión recta astrométrica y declinación del centro del objetivo con
        respecto al sitio de observación (origen de coordenadas) en el marco de
        referencia de la efeméride planetaria (ICRF). Compensado por la
        aberración debida al tiempo de vuelo en la pierna descendente.
      </p>

      <p class="mb-4">
        Unidades: RA en horas-minutos-segundos de tiempo, HH MM SS.ff{`ffff`}
        <br />
        DEC en grados-minutos-segundos de arco, sDD MN SC.f {`ffff`}
      </p>

      <h3 class="text-xl font-bold mb-2">APmag, S-brt, =</h3>
      <p class="mb-4">
        Magnitud visual aparente aproximada y brillo superficial de los
        objetivos. Para planetas y satélites naturales, la salida se limita a
        ángulos de fase solar cubiertos por datos observacionales. Fuera del
        rango observado del ángulo de fase, puede imprimirse &quot;n.a.&quot;
        para evitar la extrapolación más allá del límite de validez del modelo.
      </p>

      <p class="mb-4">
        Para observadores terrestres, la atenuación estimada debido a la
        absorción atmosférica (extinción) está disponible como una cantidad
        separada y solicitable.
      </p>

      <p class="mb-4">
        La luminosidad superficial es la magnitud visual promedio sin atmósfera
        de un segundo de arco cuadrado de la porción iluminada del disco
        aparente. Se calcula solo si se conoce el radio del objetivo.
      </p>

      <p class="mb-4">
        Unidades: MAGNITUDES Y MAGNITUDES POR SEGUNDO DE ARCO CUADRADO
      </p>

      <h3 class="text-xl font-bold mb-2">delta, deldot, =</h3>
      <p class="mb-4">
        Rango aparente (&quot;delta&quot;, aberrado por tiempo de vuelo) y tasa
        de rango (&quot;delta-dot&quot;) del centro del objetivo en relación con
        el observador. Un &quot;deldot&quot; positivo significa que el centro
        del objetivo se aleja del observador, negativo indica movimiento hacia
        el observador. Unidades: UA y KM/S
      </p>

      <h3 class="text-xl font-bold mb-2">S-O-T,/r, =</h3>
      <p class="mb-4">
        ÁNGULO DE ELONGACIÓN SOLAR aparente entre el Sol, el Observador y el
        Objetivo visto desde la ubicación del observador en el momento de la
        impresión.
      </p>

      <p class="mb-4">
        La columna &apos;/r&apos; proporciona un código que indica la posición
        aparente de los objetivos en relación con el Sol en el cielo de los
        observadores, como se describe a continuación:
      </p>

      <p class="mb-4">
        Caso A: Para una ubicación de observación en la superficie de un cuerpo
        en rotación, se considera el sentido de rotación de ese cuerpo:
      </p>

      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">
          /T indica que el objetivo SIGUE al Sol (cielo vespertino: se eleva y
          se pone DESPUÉS del Sol)
        </li>
        <li class="mb-2">
          /L indica que el objetivo LIDERA al Sol (cielo matutino: se eleva y se
          pone ANTES del Sol)
        </li>
      </ul>

      <p class="mb-4">
        Caso B: Para un punto de observación que no tiene un modelo de rotación
        (como una nave espacial), la condición de &quot;liderar&quot; y
        &quot;seguir&quot; se define por el movimiento orbital HELIOCENTRICO de
        los observadores:
      </p>

      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">
          * Si continuar en la dirección actual de movimiento heliocéntrico de
          los observadores encontraría primero la longitud aparente de los
          objetivos, seguida por la del Sol, el objetivo LIDERA al Sol según lo
          visto por el observador.
        </li>
        <li class="mb-2">
          * Si la longitud aparente del Sol se encontraría primero, seguida por
          la de los objetivos, el objetivo SIGUE al Sol.
        </li>
      </ul>
      <p class="mb-4">Dos otros códigos pueden ser impresos:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">
          {`/* indica que el observador está centrado en el Sol (no definido)`}
        </li>
        <li class="mb-2">
          /? El objetivo está alineado con el centro del Sol (sin liderar ni
          seguir)
        </li>
      </ul>

      <p class="mb-4">
        El ángulo de elongación solar S-O-T es numéricamente la separación
        mínima entre el Sol y el objetivo en el cielo en cualquier dirección. NO
        indica la cantidad de separación en las direcciones de liderar o seguir,
        que estaría definida a lo largo del ecuador de un sistema de coordenadas
        esféricas.
      </p>

      <p class="mb-4">Unidades: GRADOS</p>

      <h3 class="text-xl font-bold mb-2">&apos;S-T-O,&apos; =</h3>
      <p class="mb-4">
        Ángulo Sol-Objetivo-Observador; el ángulo interior en el centro del
        objetivo formado por un vector desde el objetivo hasta el centro
        aparente del Sol (en el tiempo de reflexión en el objetivo) y el vector
        aparente desde el objetivo hasta el observador en el momento de la
        impresión. Ligeramente diferente del VERDADERO ÁNGULO DE FASE
        (solicitable por separado) en el nivel de pocos segundos de arco en que
        incluye la aberración estelar en la pierna descendente desde el objetivo
        hasta el observador. Unidades: GRADOS
      </p>

      <h3 class="text-xl font-bold mb-2">&apos;Cnst,&apos; =</h3>
      <p class="mb-4">
        ID de la constelación; la abreviatura de tres letras del nombre de la
        constelación que contiene la posición astrométrica de los centros del
        objetivo, según la delimitación de los límites de la IAU (1930).
        Consulte la documentación para obtener la lista de abreviaturas.
      </p>

      <p class="mb-4">Computaciones realizadas por...</p>

      <p class="mb-2">
        Grupo de Dinámica del Sistema Solar, Sistema de Efemérides en Línea de
        Horizons
      </p>
      <p class="mb-2">
        4800 Oak Grove Drive, Laboratorio de Propulsión a Chorro
      </p>
      <p class="mb-2">Pasadena, CA 91109, EE. UU.</p>

      <p class="mb-2">
        Sitio web general:
        <a href="https://ssd.jpl.nasa.gov/" target="_blank">
          https://ssd.jpl.nasa.gov/
        </a>
      </p>
      <p class="mb-2">
        Lista de correo:
        <a href="https://ssd.jpl.nasa.gov/email_list.html" target="_blank">
          https://ssd.jpl.nasa.gov/email_list.html
        </a>
      </p>
      <p class="mb-2">
        Noticias del sistema:
        <a href="https://ssd.jpl.nasa.gov/horizons/news.html" target="_blank">
          https://ssd.jpl.nasa.gov/horizons/news.html
        </a>
      </p>
      <p class="mb-2">
        Guía del usuario:
        <a href="https://ssd.jpl.nasa.gov/horizons/manual.html" target="_blank">
          https://ssd.jpl.nasa.gov/horizons/manual.html
        </a>
      </p>
      <p class="mb-2">
        Conectar:
        <a href="https://ssd.jpl.nasa.gov/horizons/app.html#/x" target="_blank">
          navegador
        </a>
        |
        <a
          href="https://ssd-api.jpl.nasa.gov/doc/horizons.html"
          target="_blank"
        >
          API
        </a>
        |
        <a href="telnet ssd.jpl.nasa.gov 6775" target="_blank">
          línea de comandos telnet
        </a>
        |
        <a
          href="https://ssd.jpl.nasa.gov/ftp/ssd/hrzn_batch.txt"
          target="_blank"
        >
          correo electrónico/lote
        </a>
        |
        <a href="https://ssd.jpl.nasa.gov/ftp/ssd/SCRIPTS" target="_blank">
          scripts
        </a>
      </p>
      <p class="mb-2">
        Autor:
        <a href="mailto:Jon.D.Giorgini@jpl.nasa.gov" target="_blank">
          Jon.D.Giorgini@jpl.nasa.gov
        </a>
      </p>
    </div>
  );
}
