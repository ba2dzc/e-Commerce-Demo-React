import React from 'react'
import TextInput from "../toolbox/TextInput"
import SelectInput from '../toolbox/SelectInput'
import { Container } from 'reactstrap'

const ProductDetail = (
    { categories, product, onSave, onChange, errors }
) => {
    return (
        <Container><form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName" label="Ürün Adı" value={product.productName} onChange={onChange} error={errors.productName} />
            <SelectInput
                name="categoryId" label="Kategori" value={product.categoryId || ""}
                defaultOption="Seçiniz" options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange} error={errors.categoryId}
            />
            <TextInput name="unitPrice" label="Ürün Fiyat" value={product.unitPrice} onChange={onChange} error={errors.unitPrice} />
            <TextInput name="quantityPerUnit" label="Adet Sayısı" value={product.quantityPerUnit} onChange={onChange} error={errors.quantityPerUnit} />
            <TextInput name="unitsInStock" label="Stok Adedi" value={product.unitsInStock} onChange={onChange} error={errors.unitsInStock} />
            <button type='submit' className='btn btn-success'>Kaydet</button>

        </form></Container>

    )
}

export default ProductDetail