# ModelsBillingProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContactEmail** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Features** | Pointer to **[]string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**IsDefault** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**ProductType** | Pointer to **string** |  | [optional] 
**RecurringCostCents** | Pointer to **int32** |  | [optional] 
**RecurringFrequency** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 
**UsageUnit** | Pointer to **string** |  | [optional] 
**UsageUnitCostCents** | Pointer to **int32** |  | [optional] 

## Methods

### NewModelsBillingProduct

`func NewModelsBillingProduct() *ModelsBillingProduct`

NewModelsBillingProduct instantiates a new ModelsBillingProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsBillingProductWithDefaults

`func NewModelsBillingProductWithDefaults() *ModelsBillingProduct`

NewModelsBillingProductWithDefaults instantiates a new ModelsBillingProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContactEmail

`func (o *ModelsBillingProduct) GetContactEmail() string`

GetContactEmail returns the ContactEmail field if non-nil, zero value otherwise.

### GetContactEmailOk

`func (o *ModelsBillingProduct) GetContactEmailOk() (*string, bool)`

GetContactEmailOk returns a tuple with the ContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactEmail

`func (o *ModelsBillingProduct) SetContactEmail(v string)`

SetContactEmail sets ContactEmail field to given value.

### HasContactEmail

`func (o *ModelsBillingProduct) HasContactEmail() bool`

HasContactEmail returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelsBillingProduct) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsBillingProduct) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsBillingProduct) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsBillingProduct) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsBillingProduct) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsBillingProduct) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsBillingProduct) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsBillingProduct) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFeatures

`func (o *ModelsBillingProduct) GetFeatures() []string`

GetFeatures returns the Features field if non-nil, zero value otherwise.

### GetFeaturesOk

`func (o *ModelsBillingProduct) GetFeaturesOk() (*[]string, bool)`

GetFeaturesOk returns a tuple with the Features field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatures

`func (o *ModelsBillingProduct) SetFeatures(v []string)`

SetFeatures sets Features field to given value.

### HasFeatures

`func (o *ModelsBillingProduct) HasFeatures() bool`

HasFeatures returns a boolean if a field has been set.

### GetId

`func (o *ModelsBillingProduct) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsBillingProduct) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsBillingProduct) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsBillingProduct) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIsDefault

`func (o *ModelsBillingProduct) GetIsDefault() bool`

GetIsDefault returns the IsDefault field if non-nil, zero value otherwise.

### GetIsDefaultOk

`func (o *ModelsBillingProduct) GetIsDefaultOk() (*bool, bool)`

GetIsDefaultOk returns a tuple with the IsDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDefault

`func (o *ModelsBillingProduct) SetIsDefault(v bool)`

SetIsDefault sets IsDefault field to given value.

### HasIsDefault

`func (o *ModelsBillingProduct) HasIsDefault() bool`

HasIsDefault returns a boolean if a field has been set.

### GetName

`func (o *ModelsBillingProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsBillingProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsBillingProduct) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsBillingProduct) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProductType

`func (o *ModelsBillingProduct) GetProductType() string`

GetProductType returns the ProductType field if non-nil, zero value otherwise.

### GetProductTypeOk

`func (o *ModelsBillingProduct) GetProductTypeOk() (*string, bool)`

GetProductTypeOk returns a tuple with the ProductType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductType

`func (o *ModelsBillingProduct) SetProductType(v string)`

SetProductType sets ProductType field to given value.

### HasProductType

`func (o *ModelsBillingProduct) HasProductType() bool`

HasProductType returns a boolean if a field has been set.

### GetRecurringCostCents

`func (o *ModelsBillingProduct) GetRecurringCostCents() int32`

GetRecurringCostCents returns the RecurringCostCents field if non-nil, zero value otherwise.

### GetRecurringCostCentsOk

`func (o *ModelsBillingProduct) GetRecurringCostCentsOk() (*int32, bool)`

GetRecurringCostCentsOk returns a tuple with the RecurringCostCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringCostCents

`func (o *ModelsBillingProduct) SetRecurringCostCents(v int32)`

SetRecurringCostCents sets RecurringCostCents field to given value.

### HasRecurringCostCents

`func (o *ModelsBillingProduct) HasRecurringCostCents() bool`

HasRecurringCostCents returns a boolean if a field has been set.

### GetRecurringFrequency

`func (o *ModelsBillingProduct) GetRecurringFrequency() string`

GetRecurringFrequency returns the RecurringFrequency field if non-nil, zero value otherwise.

### GetRecurringFrequencyOk

`func (o *ModelsBillingProduct) GetRecurringFrequencyOk() (*string, bool)`

GetRecurringFrequencyOk returns a tuple with the RecurringFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecurringFrequency

`func (o *ModelsBillingProduct) SetRecurringFrequency(v string)`

SetRecurringFrequency sets RecurringFrequency field to given value.

### HasRecurringFrequency

`func (o *ModelsBillingProduct) HasRecurringFrequency() bool`

HasRecurringFrequency returns a boolean if a field has been set.

### GetSlug

`func (o *ModelsBillingProduct) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ModelsBillingProduct) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ModelsBillingProduct) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *ModelsBillingProduct) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsBillingProduct) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsBillingProduct) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsBillingProduct) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsBillingProduct) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetUsageUnit

`func (o *ModelsBillingProduct) GetUsageUnit() string`

GetUsageUnit returns the UsageUnit field if non-nil, zero value otherwise.

### GetUsageUnitOk

`func (o *ModelsBillingProduct) GetUsageUnitOk() (*string, bool)`

GetUsageUnitOk returns a tuple with the UsageUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageUnit

`func (o *ModelsBillingProduct) SetUsageUnit(v string)`

SetUsageUnit sets UsageUnit field to given value.

### HasUsageUnit

`func (o *ModelsBillingProduct) HasUsageUnit() bool`

HasUsageUnit returns a boolean if a field has been set.

### GetUsageUnitCostCents

`func (o *ModelsBillingProduct) GetUsageUnitCostCents() int32`

GetUsageUnitCostCents returns the UsageUnitCostCents field if non-nil, zero value otherwise.

### GetUsageUnitCostCentsOk

`func (o *ModelsBillingProduct) GetUsageUnitCostCentsOk() (*int32, bool)`

GetUsageUnitCostCentsOk returns a tuple with the UsageUnitCostCents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageUnitCostCents

`func (o *ModelsBillingProduct) SetUsageUnitCostCents(v int32)`

SetUsageUnitCostCents sets UsageUnitCostCents field to given value.

### HasUsageUnitCostCents

`func (o *ModelsBillingProduct) HasUsageUnitCostCents() bool`

HasUsageUnitCostCents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


