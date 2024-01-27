import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Seu carrinho</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (R$)</span>
                                <strong>R${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Cupom de desconto" />
                                <button type="submit" className="btn btn-secondary">Aplicar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Endereço de Cobrança</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Primeiro Nome</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        É necessário um nome válido.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Sobrenome</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        É necessário um nome válido.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Usuario</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            É necessário um nome válido.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">E-mail <span className="text-muted">(Opcional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="" />
                                    <div className="invalid-feedback">
                                        Insira um endereço de e-mail válido Para atualizações de envio.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Endereço</label>
                                    <input type="text" className="form-control" id="address" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Favor inserir seu endereço de entrega.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Endereço 2 <span className="text-muted">(Opcional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">País</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Escolher...</option>
                                        <option>Brasil</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Selecione um país válido.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Estado</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Escolher...</option>
                                        <option>Ceará</option>
                                        <option>São Paulo</option>
                                        <option>Belo Horizonte</option>
                                        <option>Santa Catarina</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Forneça um estado válido.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">SEP</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        SEP obrigatório.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">O endereço de entrega é igual ao meu endereço de cobrança</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Salve essas informações para a próxima compra</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Formas de Pagamento</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="credit">Cartão de Crédito</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Cartão de Débito</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Nome no cartão</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Nome completo conforme exibido no cartão</small>
                                    <div className="invalid-feedback">
                                        O nome no cartão é obrigatório
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Número do cartão de crédito</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        O número do cartão de crédito é obrigatório
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Vencimento</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Data de validade necessária
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Código de segurança obrigatório
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Continuar para finalizar a compra</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
