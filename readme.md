#Sistema de Monitoreo

    #Costos Directos
        #Produccion
            #Materia Prima
            #Mano De Obra
            #Insumos


    #Costos Indirectos
        #Mano De Obra Indirecta
        #Alquiler del Local
        #Pago de Internet
        #Amortiazaciones de Maquinarias
        #Tributos

    #Costos Fijos
        #Pago Agua, luz Internet
        #Pagos de Seguros
        #Alquiler Local
        #Tributos

    #Costos por Produccion
        #Materia Prima
        #Mano de Obra
        #Mantenimento
        #Servicios



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