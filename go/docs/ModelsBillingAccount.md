# ModelsBillingAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingEmail** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**HasPaymentMethod** | Pointer to **bool** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**NextProduct** | Pointer to [**ModelsBillingProduct**](ModelsBillingProduct.md) |  | [optional] 
**NextProductId** | Pointer to **string** |  | [optional] 
**Product** | Pointer to [**ModelsBillingProduct**](ModelsBillingProduct.md) |  | [optional] 
**ProductChangeAfter** | Pointer to **string** |  | [optional] 
**ProductId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsBillingAccount

`func NewModelsBillingAccount() *ModelsBillingAccount`

NewModelsBillingAccount instantiates a new ModelsBillingAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsBillingAccountWithDefaults

`func NewModelsBillingAccountWithDefaults() *ModelsBillingAccount`

NewModelsBillingAccountWithDefaults instantiates a new ModelsBillingAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingEmail

`func (o *ModelsBillingAccount) GetBillingEmail() string`

GetBillingEmail returns the BillingEmail field if non-nil, zero value otherwise.

### GetBillingEmailOk

`func (o *ModelsBillingAccount) GetBillingEmailOk() (*string, bool)`

GetBillingEmailOk returns a tuple with the BillingEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingEmail

`func (o *ModelsBillingAccount) SetBillingEmail(v string)`

SetBillingEmail sets BillingEmail field to given value.

### HasBillingEmail

`func (o *ModelsBillingAccount) HasBillingEmail() bool`

HasBillingEmail returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelsBillingAccount) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsBillingAccount) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsBillingAccount) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsBillingAccount) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsBillingAccount) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsBillingAccount) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsBillingAccount) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsBillingAccount) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHasPaymentMethod

`func (o *ModelsBillingAccount) GetHasPaymentMethod() bool`

GetHasPaymentMethod returns the HasPaymentMethod field if non-nil, zero value otherwise.

### GetHasPaymentMethodOk

`func (o *ModelsBillingAccount) GetHasPaymentMethodOk() (*bool, bool)`

GetHasPaymentMethodOk returns a tuple with the HasPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPaymentMethod

`func (o *ModelsBillingAccount) SetHasPaymentMethod(v bool)`

SetHasPaymentMethod sets HasPaymentMethod field to given value.

### HasHasPaymentMethod

`func (o *ModelsBillingAccount) HasHasPaymentMethod() bool`

HasHasPaymentMethod returns a boolean if a field has been set.

### GetId

`func (o *ModelsBillingAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsBillingAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsBillingAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsBillingAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsBillingAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsBillingAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsBillingAccount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsBillingAccount) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNextProduct

`func (o *ModelsBillingAccount) GetNextProduct() ModelsBillingProduct`

GetNextProduct returns the NextProduct field if non-nil, zero value otherwise.

### GetNextProductOk

`func (o *ModelsBillingAccount) GetNextProductOk() (*ModelsBillingProduct, bool)`

GetNextProductOk returns a tuple with the NextProduct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextProduct

`func (o *ModelsBillingAccount) SetNextProduct(v ModelsBillingProduct)`

SetNextProduct sets NextProduct field to given value.

### HasNextProduct

`func (o *ModelsBillingAccount) HasNextProduct() bool`

HasNextProduct returns a boolean if a field has been set.

### GetNextProductId

`func (o *ModelsBillingAccount) GetNextProductId() string`

GetNextProductId returns the NextProductId field if non-nil, zero value otherwise.

### GetNextProductIdOk

`func (o *ModelsBillingAccount) GetNextProductIdOk() (*string, bool)`

GetNextProductIdOk returns a tuple with the NextProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextProductId

`func (o *ModelsBillingAccount) SetNextProductId(v string)`

SetNextProductId sets NextProductId field to given value.

### HasNextProductId

`func (o *ModelsBillingAccount) HasNextProductId() bool`

HasNextProductId returns a boolean if a field has been set.

### GetProduct

`func (o *ModelsBillingAccount) GetProduct() ModelsBillingProduct`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *ModelsBillingAccount) GetProductOk() (*ModelsBillingProduct, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *ModelsBillingAccount) SetProduct(v ModelsBillingProduct)`

SetProduct sets Product field to given value.

### HasProduct

`func (o *ModelsBillingAccount) HasProduct() bool`

HasProduct returns a boolean if a field has been set.

### GetProductChangeAfter

`func (o *ModelsBillingAccount) GetProductChangeAfter() string`

GetProductChangeAfter returns the ProductChangeAfter field if non-nil, zero value otherwise.

### GetProductChangeAfterOk

`func (o *ModelsBillingAccount) GetProductChangeAfterOk() (*string, bool)`

GetProductChangeAfterOk returns a tuple with the ProductChangeAfter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductChangeAfter

`func (o *ModelsBillingAccount) SetProductChangeAfter(v string)`

SetProductChangeAfter sets ProductChangeAfter field to given value.

### HasProductChangeAfter

`func (o *ModelsBillingAccount) HasProductChangeAfter() bool`

HasProductChangeAfter returns a boolean if a field has been set.

### GetProductId

`func (o *ModelsBillingAccount) GetProductId() string`

GetProductId returns the ProductId field if non-nil, zero value otherwise.

### GetProductIdOk

`func (o *ModelsBillingAccount) GetProductIdOk() (*string, bool)`

GetProductIdOk returns a tuple with the ProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductId

`func (o *ModelsBillingAccount) SetProductId(v string)`

SetProductId sets ProductId field to given value.

### HasProductId

`func (o *ModelsBillingAccount) HasProductId() bool`

HasProductId returns a boolean if a field has been set.

### GetStatus

`func (o *ModelsBillingAccount) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ModelsBillingAccount) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ModelsBillingAccount) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ModelsBillingAccount) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsBillingAccount) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsBillingAccount) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsBillingAccount) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsBillingAccount) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


