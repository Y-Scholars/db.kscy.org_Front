import paramiko
import os

#오류 발생시에는 pip install paramiko

key = paramiko.RSAKey.from_private_key_file('./yscholar_aws.pem')
client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

host = 'ec2-54-190-7-146.us-west-2.compute.amazonaws.com'

print("connecting")

client.connect(hostname=host, username='ubuntu', pkey=key)

transport = paramiko.Transport((host, 22))
transport.connect(username='ubuntu')
transport.auth_publickey(username='ubuntu', key=key)

sftp = paramiko.SFTPClient.from_transport(transport)

print('connected')

print('deleting dist dir')
commands = ['sudo rm -rf /home/ubuntu/yscholar_front/db.kscy.org_Front/dist' ,'sudo mkdir /home/ubuntu/yscholar_front/db.kscy.org_Front/dist', 'sudo chmod 757 /home/ubuntu/yscholar_front/db.kscy.org_Front/dist']

for command in commands:
    stdin , stdout, stderr = client.exec_command(command)
    print(stdout.read())
    print( "Errors")
    print(stderr.read())

print('uploading...')
parent = os.getcwd() + '/dist'
dir_remote= '/home/ubuntu/yscholar_front/db.kscy.org_Front/dist'
for dirpath, dirnames, filenames in os.walk(parent):
    remote_path = os.path.join(dir_remote, dirpath)
    # make remote directory ...
    for filename in filenames:
        local_path = os.path.join(dirpath, filename)
        remote_filepath = os.path.join(dir_remote, filename)
        print('uploading ', local_path)
        print(remote_filepath)
        sftp.put(localpath=local_path, remotepath=remote_filepath)

print('closing connection...')
sftp.close()
transport.close()
