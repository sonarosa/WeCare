<label htmlFor="stock">Product Stock</label>
<div className="stock">
<button onClick={() => setStock(stock - 1)}>-</button>
<span>{stock}</span>
<button onClick={() => setStock(stock + 1)}>+</button>
</div>