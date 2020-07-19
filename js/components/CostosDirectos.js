const CostosDirectos = {
  template: /*html*/ `
  <div>
    <div class="card">
      <h1 class="txt-center">COSTOS DIRECTOS</h1>
    </div>

    <div class="card">

      <h3 class=" p-2">MODO DE VISUALIZACION</h3>

      <select class="p-1 m-2" v-model="opcion" @change="seleccionarOpcion">
        <option value="simple">MODO SIMPLE</option>
        <option value="avanzado">MODO AVANZADO</option>
      </select>

      <button class="btn btn-warning" @click="modal=!modal">MOSTRAR GRAFICO</button>

      <table class="table-success" v-if="simple">
        <thead>
          <th>PRODUCTO</th>
          <th>INSUMOS</th>
          <th>MATERIA PRIMA</th>
          <th>MANO DE OBRA</th>
          <th>TOTAL POR PRODUCTO</th>
        </thead>
        <tbody>
          <tr v-for="(producto,index) in datos" :key="index">
            <td v-text="producto.producto.toUpperCase()"></td>
            <td v-text="calcularCosto(producto,'insumo')"></td>
            <td v-text="calcularCosto(producto,'materia_prima')"></td>
            <td v-text="calcularCosto(producto,'mano_obra')"></td>
            <td v-text="calcularCostoProducto(producto,costoDirectos)"></td>
          </tr>
          <tr class="success">
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td v-text="calcularCostoTotal()"></td>
          </tr>
        </tbody>
      </table>


      <table class="table-info" v-if="avanzado">
        <thead>
          <th>PRODUCTO</th>
          <th>INSUMOS</th>
          <th>MATERIA PRIMA</th>
          <th>MANO DE OBRA</th>
          <th>TOTAL POR PRODUCTO</th>
        </thead>
        <tbody>
          <tr v-for="(producto,index) in datos" :key="index">
            <td v-text="producto.producto.toUpperCase()"></td>
            <td v-text="calcularCosto(producto,'insumo')"></td>
            <td v-text="calcularCosto(producto,'materia_prima')"></td>
            <td v-text="calcularCosto(producto,'mano_obra')"></td>
            <td v-text="calcularCostoProducto(producto,costoDirectos)"></td>
          </tr>
          <tr class="info">
            <td></td>
            <td></td>
            <td></td>
            <td>TOTAL</td>
            <td v-text="calcularCostoTotal()"></td>
          </tr>
        </tbody>
      </table>

    </div>

    <div :class="{'acitive-modal':modal}" class=" modal-chart  card d-flex align-items-center flex-direction-column">
      <button @click="modal=!modal" class=" cerrar-modal btn btn-danger">CERRAR</button>
      <h2 class="p-2">CUADRO ESTATISTICOS DE COSTOS DIRECTOS</h2>
      <div style="">
        <canvas ref="chart" width="1000" height="450"></canvas>
      </div>
    </div>

  </div>
  `,
  mounted() {},
  data: () => {
    return {
      modal: true,
      simple: false,
      avanzado: true,
      opcion: "avanzado",
      costoDirectos: ["insumo", "materia_prima", "mano_obra"],
      datos: [
        {
          producto: "Tarjeta de Video",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "NVIDIA",
              costo: 50.0,
            },
            {
              name: "VRAM",
              modelo: "GDRR6",
              costo: 20.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "PROCESADOR INTEL",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "INTEL",
              costo: 100.0,
            },
            {
              name: "CONDENSADORES",
              modelo: "BG50",
              costo: 5.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "MEMORIA RAM",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "KIGNSTON",
              costo: 30.0,
            },
            {
              name: "SDRRAM",
              modelo: "DDR4",
              costo: 50.0,
            },
            {
              name: "DISIPADORES",
              modelo: "REJILLA",
              costo: 18.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "PLACA MADRE",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "ASUS",
              costo: 24.0,
            },
            {
              name: "BIOS",
              modelo: "INTEL",
              costo: 15.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 7.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "FUENTE DE PODER",
          materia_prima: [
            {
              name: "CORSAIR",
              modelo: "400W",
              costo: 46.0,
            },
            {
              name: "CONDENSADOR",
              modelo: "FJT-4",
              costo: 13.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 3.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "DISCO DURO",
          materia_prima: [
            {
              name: "SEGATE",
              modelo: "TER2",
              costo: 32.0,
            },
            {
              name: "DISCO SFTR",
              modelo: "25D",
              costo: 19.0,
            },
            {
              name: "DISIPADORES",
              modelo: "REJILLA",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "CASE GIGABYTE",
          materia_prima: [
            {
              name: "COBRE",
              modelo: "NEGRO BLACK",
              costo: 75.0,
            },
            {
              name: "TORNILLOS",
              modelo: "FGT25",
              costo: 3.0,
            },
            {
              name: "DISIPADORES",
              modelo: "VENTILADORES RGBA",
              costo: 1.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "AURICULARES",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "MICRONICS",
              costo: 23.0,
            },
            {
              name: "MICROFONO",
              modelo: "SEGATE",
              costo: 8.0,
            },
            {
              name: "ALMOHADILLAS",
              modelo: "FRESH",
              costo: 6.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "REFRIGERACION LIQUIDA",
          materia_prima: [
            {
              name: "TITANIUM",
              modelo: "TITAN201",
              costo: 8.0,
            },
            {
              name: "TUBOS",
              modelo: "ACRIN",
              costo: 30.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 60.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "TECLADO",
          materia_prima: [
            {
              name: "SWITCH",
              modelo: "BLUE",
              costo: 11.0,
            },
            {
              name: "PLATICO CHROMADO",
              modelo: "PLASTICSA-1",
              costo: 8.0,
            },
            {
              name: "CABLE CHROMADO",
              modelo: "JFHT-54F",
              costo: 5.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "MOUSE GAMING",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "RAZER",
              costo: 31.0,
            },
            {
              name: "CLICKET",
              modelo: "JNVB-5C",
              costo: 10.0,
            },
            {
              name: "CABLE CHROMADO",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "Tarjeta de Video",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "NVIDIA",
              costo: 50.0,
            },
            {
              name: "VRAM",
              modelo: "GDRR6",
              costo: 20.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "PROCESADOR INTEL",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "INTEL",
              costo: 100.0,
            },
            {
              name: "CONDENSADORES",
              modelo: "BG50",
              costo: 5.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "MEMORIA RAM",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "KIGNSTON",
              costo: 30.0,
            },
            {
              name: "SDRRAM",
              modelo: "DDR4",
              costo: 50.0,
            },
            {
              name: "DISIPADORES",
              modelo: "REJILLA",
              costo: 18.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "PLACA MADRE",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "ASUS",
              costo: 24.0,
            },
            {
              name: "BIOS",
              modelo: "INTEL",
              costo: 15.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 7.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "FUENTE DE PODER",
          materia_prima: [
            {
              name: "CORSAIR",
              modelo: "400W",
              costo: 46.0,
            },
            {
              name: "CONDENSADOR",
              modelo: "FJT-4",
              costo: 13.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 3.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "DISCO DURO",
          materia_prima: [
            {
              name: "SEGATE",
              modelo: "TER2",
              costo: 32.0,
            },
            {
              name: "DISCO SFTR",
              modelo: "25D",
              costo: 19.0,
            },
            {
              name: "DISIPADORES",
              modelo: "REJILLA",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "CASE GIGABYTE",
          materia_prima: [
            {
              name: "COBRE",
              modelo: "NEGRO BLACK",
              costo: 75.0,
            },
            {
              name: "TORNILLOS",
              modelo: "FGT25",
              costo: 3.0,
            },
            {
              name: "DISIPADORES",
              modelo: "VENTILADORES RGBA",
              costo: 1.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "AURICULARES",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "MICRONICS",
              costo: 23.0,
            },
            {
              name: "MICROFONO",
              modelo: "SEGATE",
              costo: 8.0,
            },
            {
              name: "ALMOHADILLAS",
              modelo: "FRESH",
              costo: 6.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "REFRIGERACION LIQUIDA",
          materia_prima: [
            {
              name: "TITANIUM",
              modelo: "TITAN201",
              costo: 8.0,
            },
            {
              name: "TUBOS",
              modelo: "ACRIN",
              costo: 30.0,
            },
            {
              name: "DISIPADORES",
              modelo: " VENTILADORES",
              costo: 60.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "TECLADO",
          materia_prima: [
            {
              name: "SWITCH",
              modelo: "BLUE",
              costo: 11.0,
            },
            {
              name: "PLATICO CHROMADO",
              modelo: "PLASTICSA-1",
              costo: 8.0,
            },
            {
              name: "CABLE CHROMADO",
              modelo: "JFHT-54F",
              costo: 5.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
        {
          producto: "MOUSE GAMING",
          materia_prima: [
            {
              name: "CHIPSET",
              modelo: "RAZER",
              costo: 31.0,
            },
            {
              name: "CLICKET",
              modelo: "JNVB-5C",
              costo: 10.0,
            },
            {
              name: "CABLE CHROMADO",
              modelo: " VENTILADORES",
              costo: 10.0,
            },
          ],
          mano_obra: [
            {
              trabajador: "SOLDADOR",
              costo: 7.0,
            },
            {
              trabajador: "ENSAMBLAJE",
              costo: 3.0,
            },
            {
              trabajador: "EMPAQUETADOR",
              costo: 1.0,
            },
          ],
          insumo: [
            {
              name: "PASTA TERMICA",
              costo: 0.5,
            },
            {
              name: "CAJA",
              costo: 0.2,
            },
            {
              name: "EMVOLTURA",
              costo: 0.1,
            },
          ],
          mano_obra_indirecta: [
            {
              trabajador: "TRANSPORTE",
              costo: 5.0,
            },
            {
              trabajador: "TRABAJADORES ABONADOS",
              costo: 150.0,
            },
            {
              trabajador: "S.O",
              costo: 20.0,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    const vm = this;
    const data = this.datos;

    new Chart(vm.$refs.chart, {
      type: "bar",
      data: {
        labels: [
          ...data.map((ele) => ele.producto.toUpperCase()).splice(0, 11),
        ],
        datasets: [
          {
            label: "Precios (MILLONES DE DORALES)",
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#3e95ce",
              "#8e5ea0",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
              "#3cba9f",
            ],
            data: [
              ...data
                .map((ele) => vm.calcularCostoProducto(ele, vm.costoDirectos))
                .splice(0, 11),
            ],
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "PRODUCTOS",
        },
      },
    });
  },
  methods: {
    calcularCostoTotal() {
      return this.datos
        .reduce((acc, ele) => {
          return acc + this.calcularCostoProducto(ele, this.costoDirectos);
        }, 0)
        .toFixed(2);
    },
    calcularCostoProducto(producto, propiedades) {
      return propiedades.reduce((acc, ele) => {
        return acc + parseFloat(this.calcularCosto(producto, ele));
      }, 0);
    },
    seleccionarOpcion() {
      this.simple = false;
      this.avanzando = false;
      this[this.opcion] = true;
    },
    calcularCosto(producto, propiedad) {
      return producto[propiedad]
        .reduce((acc, ele) => {
          return acc + parseFloat(ele.costo);
        }, 0)
        .toFixed(2);
    },
    mostrarGrafico() {},
  },
};
