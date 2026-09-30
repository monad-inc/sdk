# ElasticsearchConnectionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudId** | Pointer to [**ElasticsearchCloudIdVariant**](ElasticsearchCloudIdVariant.md) |  | [optional] 
**Type** | **string** |  | 
**Url** | Pointer to [**ElasticsearchUrlVariant**](ElasticsearchUrlVariant.md) |  | [optional] 

## Methods

### NewElasticsearchConnectionConfig

`func NewElasticsearchConnectionConfig(type_ string, ) *ElasticsearchConnectionConfig`

NewElasticsearchConnectionConfig instantiates a new ElasticsearchConnectionConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchConnectionConfigWithDefaults

`func NewElasticsearchConnectionConfigWithDefaults() *ElasticsearchConnectionConfig`

NewElasticsearchConnectionConfigWithDefaults instantiates a new ElasticsearchConnectionConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudId

`func (o *ElasticsearchConnectionConfig) GetCloudId() ElasticsearchCloudIdVariant`

GetCloudId returns the CloudId field if non-nil, zero value otherwise.

### GetCloudIdOk

`func (o *ElasticsearchConnectionConfig) GetCloudIdOk() (*ElasticsearchCloudIdVariant, bool)`

GetCloudIdOk returns a tuple with the CloudId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudId

`func (o *ElasticsearchConnectionConfig) SetCloudId(v ElasticsearchCloudIdVariant)`

SetCloudId sets CloudId field to given value.

### HasCloudId

`func (o *ElasticsearchConnectionConfig) HasCloudId() bool`

HasCloudId returns a boolean if a field has been set.

### GetType

`func (o *ElasticsearchConnectionConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ElasticsearchConnectionConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ElasticsearchConnectionConfig) SetType(v string)`

SetType sets Type field to given value.


### GetUrl

`func (o *ElasticsearchConnectionConfig) GetUrl() ElasticsearchUrlVariant`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ElasticsearchConnectionConfig) GetUrlOk() (*ElasticsearchUrlVariant, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ElasticsearchConnectionConfig) SetUrl(v ElasticsearchUrlVariant)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ElasticsearchConnectionConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


