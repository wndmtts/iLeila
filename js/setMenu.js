//Criação do conteúdo do menu

var nomeDaPagina = window.location.pathname.split('/').pop();
console.log("Nome da Página Atual: " + nomeDaPagina);

var menuContent = `
    <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block sidebar collapse">
        <div class="position-sticky py-4 px-3 sidebar-sticky">
            <ul class="nav flex-column h-100">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">
                        <i class="bi-house-fill me-2"></i>
                        Dashboard
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="calendar.html">
                        <i class="bi bi-calendar-event me-2"></i>
                        Agendas
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="wallet.html">
                        <i class="bi-wallet me-2"></i>
                        Meus Rendimentos
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="profile.html">
                        <i class="bi-person me-2"></i>
                        Perfil
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="setting.html">
                        <i class="bi-gear me-2"></i>
                        Configurações
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="help-center.html">
                        <i class="bi-question-circle me-2"></i>
                        Central de Ajuda
                    </a>
                </li>

                <li class="nav-item featured-box mt-lg-5 mt-4 mb-4">
                    <img src="images/Pagar.png" class="img-fluid" alt="">
                        <a class="btn custom-btn" href="#">Atualizar Conta</a>
                </li>

                <li class="nav-item border-top mt-auto pt-2">
                    <a class="nav-link" href="#">
                        <i class="bi-box-arrow-left me-2"></i>
                        Sair
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    `;

    // Adiciona o conteúdo do menu à div com o id "menu"
    document.getElementById('menu').innerHTML = menuContent;