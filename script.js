function exibirCamposEspecificos() {
    var tipo = document.getElementById('tipo_imovel').value;
    var container = document.getElementById('camposEspecificos');
    container.innerHTML = ''; // limpa os campos anteriores
  
    if (tipo === 'casa') {
      container.innerHTML = `
        <fieldset>
          <legend>Características para Casa</legend>
          <label for="area_construida">Área Construída (m²):</label>
          <input type="number" id="area_construida" name="area_construida">
          
          <label for="andares">Andares:</label>
          <input type="number" id="andares" name="andares">
          
          <label for="dormitorios">Dormitórios:</label>
          <input type="number" id="dormitorios" name="dormitorios">
          
          <label for="suites">Suítes:</label>
          <input type="number" id="suites" name="suites">
          
          <label for="banheiros">Banheiros:</label>
          <input type="number" id="banheiros" name="banheiros">
          
          <label for="vagas_cobertas">Vagas Cobertas:</label>
          <input type="number" id="vagas_cobertas" name="vagas_cobertas">
          
          <label for="vagas_descobertas">Vagas Descobertas:</label>
          <input type="number" id="vagas_descobertas" name="vagas_descobertas">
          
          <label for="posicao_solar">Posição Solar/Face:</label>
          <select id="posicao_solar" name="posicao_solar">
            <option value="">Selecione</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
          
          <label for="piso">Piso:</label>
          <input type="text" id="piso" name="piso">
          
          <label for="mobilia">Mobília:</label>
          <input type="text" id="mobilia" name="mobilia">
        </fieldset>
      `;
    } else if (tipo === 'apartamento') {
      container.innerHTML = `
        <fieldset>
          <legend>Características para Apartamento</legend>
          <label for="area_privativa">Área Privativa (m²):</label>
          <input type="number" id="area_privativa" name="area_privativa">
          
          <label for="andar">Andar:</label>
          <input type="number" id="andar" name="andar">
          
          <label for="dormitorios_ap">Dormitórios:</label>
          <input type="number" id="dormitorios_ap" name="dormitorios_ap">
          
          <label for="suites_ap">Suítes:</label>
          <input type="number" id="suites_ap" name="suites_ap">
          
          <label for="banheiros_ap">Banheiros:</label>
          <input type="number" id="banheiros_ap" name="banheiros_ap">
          
          <label for="vagas_cobertas_ap">Vagas Cobertas:</label>
          <input type="number" id="vagas_cobertas_ap" name="vagas_cobertas_ap">
          
          <label for="vagas_descobertas_ap">Vagas Descobertas:</label>
          <input type="number" id="vagas_descobertas_ap" name="vagas_descobertas_ap">
          
          <label for="condominio_mensal">Condomínio Mensal (R$):</label>
          <input type="number" id="condominio_mensal" name="condominio_mensal">
          
          <label for="iptu_anual_ap">IPTU Anual (R$):</label>
          <input type="number" id="iptu_anual_ap" name="iptu_anual_ap">
        </fieldset>
      `;
    } else if (tipo === 'terreno') {
      container.innerHTML = `
        <fieldset>
          <legend>Características para Terreno</legend>
          <label for="medidas">Medidas (m x m):</label>
          <input type="text" id="medidas" name="medidas" placeholder="Ex: 20x30">
          
          <label for="topografia">Topografia:</label>
          <select id="topografia" name="topografia">
            <option value="">Selecione</option>
            <option value="plano">Plano</option>
            <option value="aclive">Aclive</option>
            <option value="declive">Declive</option>
          </select>
          
          <label for="area_total">Área Total (m²):</label>
          <input type="number" id="area_total" name="area_total">
          
          <label for="posicao_solar_terreno">Posição Solar/Face:</label>
          <select id="posicao_solar_terreno" name="posicao_solar_terreno">
            <option value="">Selecione</option>
            <option value="norte">Norte</option>
            <option value="sul">Sul</option>
            <option value="leste">Leste</option>
            <option value="oeste">Oeste</option>
          </select>
        </fieldset>
      `;
    } else if (tipo === 'rural') {
      container.innerHTML = `
        <fieldset>
          <legend>Características para Imóvel Rural</legend>
          <label for="medidas_rural">Medidas (m x m):</label>
          <input type="text" id="medidas_rural" name="medidas_rural" placeholder="Ex: 50x100">
          
          <label for="topografia_rural">Topografia:</label>
          <select id="topografia_rural" name="topografia_rural">
            <option value="">Selecione</option>
            <option value="plano">Plano</option>
            <option value="aclive">Aclive</option>
            <option value="declive">Declive</option>
          </select>
          
          <label for="area_total_rural">Área Total (m² ou ha):</label>
          <input type="number" id="area_total_rural" name="area_total_rural">
          
          <label for="mata_reflorestada">% Mata Reflorestada:</label>
          <input type="number" id="mata_reflorestada" name="mata_reflorestada">
          
          <label for="mata_nativa">% Mata Nativa:</label>
          <input type="number" id="mata_nativa" name="mata_nativa">
          
          <label for="campo">% Campo:</label>
          <input type="number" id="campo" name="campo">
          
          <label for="lavoura">% Lavoura:</label>
          <input type="number" id="lavoura" name="lavoura">
          
          <label for="benfeitorias">Benfeitorias:</label>
          <textarea id="benfeitorias" name="benfeitorias"></textarea>
        </fieldset>
      `;
    }
  }
  
  // Evento de submissão do formulário
  document.getElementById('cadastroImovel').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode coletar os dados do formulário e fazer a integração com o backend.
    alert('Imóvel cadastrado com sucesso!');
  });
  