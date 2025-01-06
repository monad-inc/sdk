# ElasticsearchSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** | The method of authentication to use with the Elasticsearch cluster. Choose between &#39;api_key&#39; or &#39;password&#39;. | [optional] 
**CloudId** | Pointer to **string** | The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;. | [optional] 
**ConnectionType** | Pointer to **string** | The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection. | [optional] 
**Index** | Pointer to **string** | The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically. | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes. | [optional] 
**Url** | Pointer to **string** | The URL of the Elasticsearch cluster. Required when connection type is set to &#39;url&#39;. | [optional] 
**Username** | Pointer to **string** | Username for authenticating with the Elasticsearch cluster. | [optional] 

## Methods

### NewElasticsearchSettingsConfig

`func NewElasticsearchSettingsConfig() *ElasticsearchSettingsConfig`

NewElasticsearchSettingsConfig instantiates a new ElasticsearchSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewElasticsearchSettingsConfigWithDefaults

`func NewElasticsearchSettingsConfigWithDefaults() *ElasticsearchSettingsConfig`

NewElasticsearchSettingsConfigWithDefaults instantiates a new ElasticsearchSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *ElasticsearchSettingsConfig) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *ElasticsearchSettingsConfig) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *ElasticsearchSettingsConfig) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *ElasticsearchSettingsConfig) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetCloudId

`func (o *ElasticsearchSettingsConfig) GetCloudId() string`

GetCloudId returns the CloudId field if non-nil, zero value otherwise.

### GetCloudIdOk

`func (o *ElasticsearchSettingsConfig) GetCloudIdOk() (*string, bool)`

GetCloudIdOk returns a tuple with the CloudId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudId

`func (o *ElasticsearchSettingsConfig) SetCloudId(v string)`

SetCloudId sets CloudId field to given value.

### HasCloudId

`func (o *ElasticsearchSettingsConfig) HasCloudId() bool`

HasCloudId returns a boolean if a field has been set.

### GetConnectionType

`func (o *ElasticsearchSettingsConfig) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *ElasticsearchSettingsConfig) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *ElasticsearchSettingsConfig) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *ElasticsearchSettingsConfig) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.

### GetIndex

`func (o *ElasticsearchSettingsConfig) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *ElasticsearchSettingsConfig) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *ElasticsearchSettingsConfig) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *ElasticsearchSettingsConfig) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *ElasticsearchSettingsConfig) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *ElasticsearchSettingsConfig) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.

### GetUrl

`func (o *ElasticsearchSettingsConfig) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ElasticsearchSettingsConfig) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ElasticsearchSettingsConfig) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ElasticsearchSettingsConfig) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetUsername

`func (o *ElasticsearchSettingsConfig) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *ElasticsearchSettingsConfig) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *ElasticsearchSettingsConfig) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *ElasticsearchSettingsConfig) HasUsername() bool`

HasUsername returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


