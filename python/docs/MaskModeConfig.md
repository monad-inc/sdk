# MaskModeConfig

Masking mode. Simple replaces values with a fixed mask. Deterministic produces a stable, correlatable output using HMAC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deterministic** | [**MaskDeterministicVariant**](MaskDeterministicVariant.md) |  | [optional] 
**simple** | **object** |  | [optional] 
**type** | **str** | Type of masking mode. \&quot;simple\&quot; or \&quot;deterministic\&quot;. Defaults to \&quot;simple\&quot;. | [optional] 

## Example

```python
from monad.models.mask_mode_config import MaskModeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MaskModeConfig from a JSON string
mask_mode_config_instance = MaskModeConfig.from_json(json)
# print the JSON string representation of the object
print(MaskModeConfig.to_json())

# convert the object into a dict
mask_mode_config_dict = mask_mode_config_instance.to_dict()
# create an instance of MaskModeConfig from a dict
mask_mode_config_from_dict = MaskModeConfig.from_dict(mask_mode_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


