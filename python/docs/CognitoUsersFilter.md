# CognitoUsersFilter

Optional filter for listing users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from monad.models.cognito_users_filter import CognitoUsersFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CognitoUsersFilter from a JSON string
cognito_users_filter_instance = CognitoUsersFilter.from_json(json)
# print the JSON string representation of the object
print(CognitoUsersFilter.to_json())

# convert the object into a dict
cognito_users_filter_dict = cognito_users_filter_instance.to_dict()
# create an instance of CognitoUsersFilter from a dict
cognito_users_filter_from_dict = CognitoUsersFilter.from_dict(cognito_users_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


