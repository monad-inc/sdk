# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.azure_virtual_machine_settings_config import AzureVirtualMachineSettingsConfig

class TestAzureVirtualMachineSettingsConfig(unittest.TestCase):
    """AzureVirtualMachineSettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AzureVirtualMachineSettingsConfig:
        """Test AzureVirtualMachineSettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AzureVirtualMachineSettingsConfig`
        """
        model = AzureVirtualMachineSettingsConfig()
        if include_optional:
            return AzureVirtualMachineSettingsConfig(
                cron = '',
                subscription_id = '',
                tenant_id = ''
            )
        else:
            return AzureVirtualMachineSettingsConfig(
        )
        """

    def testAzureVirtualMachineSettingsConfig(self):
        """Test AzureVirtualMachineSettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
