pragma solidity ^0.4.24;

contract SignalZapNode {
	mapping (address => mapping(address => bool)) canSend;

	event Signal(address indexed from, address indexed to, string signal);

	function getPermissions(address from, address to) public view returns (bool) {
		return canSend[from][to];
	}

	function setPermissions(address dest, bool value) external {
		canSend[dest][msg.sender] = value;
	}
    	
	function signal(address to) external {
		    require(canSend[msg.sender][to]);
		    emit Signal(msg.sender, to, getMessage());
	}
	}

	string myMessage;

	function setMessage(string x) public {
	myMessage = x;
	}

	function getMessage() public view returns (string) {
	return myMessage;

	}
	}
