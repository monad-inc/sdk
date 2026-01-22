# CloudflareUrlScannerSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Cloudflare Account ID | [optional] 
**BackfillStartTime** | Pointer to **string** | Date to start fetching data from (RFC3339 format). Note: Historical data availability depends on your Cloudflare plan (Free: last 50 scans, Self Serve: 30 days, Enterprise: 12 months, Cloudforce One: unlimited) | [optional] 
**FilterMyScans** | Pointer to **bool** | Filter to only show scans created by the current API token | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source | [optional] 

## Methods

### NewCloudflareUrlScannerSettingsConfig

`func NewCloudflareUrlScannerSettingsConfig() *CloudflareUrlScannerSettingsConfig`

NewCloudflareUrlScannerSettingsConfig instantiates a new CloudflareUrlScannerSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareUrlScannerSettingsConfigWithDefaults

`func NewCloudflareUrlScannerSettingsConfigWithDefaults() *CloudflareUrlScannerSettingsConfig`

NewCloudflareUrlScannerSettingsConfigWithDefaults instantiates a new CloudflareUrlScannerSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *CloudflareUrlScannerSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CloudflareUrlScannerSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CloudflareUrlScannerSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CloudflareUrlScannerSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetBackfillStartTime

`func (o *CloudflareUrlScannerSettingsConfig) GetBackfillStartTime() string`

GetBackfillStartTime returns the BackfillStartTime field if non-nil, zero value otherwise.

### GetBackfillStartTimeOk

`func (o *CloudflareUrlScannerSettingsConfig) GetBackfillStartTimeOk() (*string, bool)`

GetBackfillStartTimeOk returns a tuple with the BackfillStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackfillStartTime

`func (o *CloudflareUrlScannerSettingsConfig) SetBackfillStartTime(v string)`

SetBackfillStartTime sets BackfillStartTime field to given value.

### HasBackfillStartTime

`func (o *CloudflareUrlScannerSettingsConfig) HasBackfillStartTime() bool`

HasBackfillStartTime returns a boolean if a field has been set.

### GetFilterMyScans

`func (o *CloudflareUrlScannerSettingsConfig) GetFilterMyScans() bool`

GetFilterMyScans returns the FilterMyScans field if non-nil, zero value otherwise.

### GetFilterMyScansOk

`func (o *CloudflareUrlScannerSettingsConfig) GetFilterMyScansOk() (*bool, bool)`

GetFilterMyScansOk returns a tuple with the FilterMyScans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterMyScans

`func (o *CloudflareUrlScannerSettingsConfig) SetFilterMyScans(v bool)`

SetFilterMyScans sets FilterMyScans field to given value.

### HasFilterMyScans

`func (o *CloudflareUrlScannerSettingsConfig) HasFilterMyScans() bool`

HasFilterMyScans returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareUrlScannerSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareUrlScannerSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareUrlScannerSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareUrlScannerSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


