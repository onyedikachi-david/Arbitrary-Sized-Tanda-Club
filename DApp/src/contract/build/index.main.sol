// Automatically generated with Reach 0.1.10 (2604daf0)
pragma abicoder v2;

pragma solidity ^0.8.12;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  bool _Some;
  }

struct T1 {
  bytes32 elem0;
  bytes32 elem1;
  bytes32 elem2;
  bytes32 elem3;
  bytes32 elem4;
  bytes32 elem5;
  bytes8 elem6;
  }
struct T2 {
  bytes16 elem0;
  }
struct T3 {
  uint256 _contributionAmt;
  uint256 _duration;
  uint256 _maxUsers;
  uint256 _penaltyAmt;
  T1 _poolDescription;
  T2 _poolName;
  }
struct T4 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v347;
  uint256 v348;
  uint256 v362;
  }
struct T5 {
  address payable v341;
  T3 v342;
  }
struct T6 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v421;
  }
struct T7 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v438;
  uint256 v474;
  }
struct T8 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v438;
  }
struct T9 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v438;
  uint256 v445;
  }
struct T10 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v347;
  uint256 v348;
  uint256 v375;
  uint256 v383;
  }
struct T11 {
  T3 v342;
  }
struct T12 {
  uint256 time;
  T11 msg;
  }
struct T14 {
  uint256 time;
  bool msg;
  }
enum _enum_T15 {Contribution, Finished, Payment, Registration}
struct T15 {
  _enum_T15 which;
  bool _Contribution;
  bool _Finished;
  bool _Payment;
  bool _Registration;
  }

struct T16 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  uint256 v347;
  uint256 v348;
  }
struct T17 {
  uint256 v375;
  uint256 v376;
  uint256 v383;
  }
struct T18 {
  T16 svs;
  T17 msg;
  }
struct T19 {
  address payable v341;
  T3 v342;
  uint256 v345;
  uint256 v346;
  }
struct T20 {
  uint256 v414;
  uint256 v421;
  }
struct T21 {
  T19 svs;
  T20 msg;
  }
struct T22 {
  bool v430;
  uint256 v431;
  uint256 v438;
  }
struct T23 {
  T19 svs;
  T22 msg;
  }
struct T25 {
  bool v498;
  }
struct T26 {
  uint256 time;
  T25 msg;
  }
struct T27 {
  bool v453;
  }
struct T28 {
  uint256 time;
  T27 msg;
  }
struct T29 {
  bool v397;
  }
struct T30 {
  uint256 time;
  T29 msg;
  }


contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  mapping (address => T0) map0;
  function __reachMap0Ref(address addr)  internal view returns (T0 memory res) {
    if (map0[addr].which == _enum_T0.Some) {
      res = map0[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap0Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap0Ref(addr);}
  
  mapping (address => T0) map1;
  function __reachMap1Ref(address addr)  internal view returns (T0 memory res) {
    if (map1[addr].which == _enum_T0.Some) {
      res = map1[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap1Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap1Ref(addr);}
  
  mapping (address => T0) map2;
  function __reachMap2Ref(address addr)  internal view returns (T0 memory res) {
    if (map2[addr].which == _enum_T0.Some) {
      res = map2[addr];}
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }}
  function _reachMap2Ref(address addr)  external view returns (T0 memory res) {
    res = __reachMap2Ref(addr);}
  
  
  
  
  
  
  
  
  
  
  function poolDetails()  external view returns (T3 memory) {
    if (current_step == uint256(1)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(2)) {
      (T4 memory vvs) = abi.decode(current_svbs, (T4));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(5)) {
      (T5 memory vvs) = abi.decode(current_svbs, (T5));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(7)) {
      (T6 memory vvs) = abi.decode(current_svbs, (T6));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(9)) {
      (T7 memory vvs) = abi.decode(current_svbs, (T7));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(10)) {
      (T8 memory vvs) = abi.decode(current_svbs, (T8));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(11)) {
      (T8 memory vvs) = abi.decode(current_svbs, (T8));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(12)) {
      (T9 memory vvs) = abi.decode(current_svbs, (T9));
      
      
      return vvs.v342;
      
      
      }
    if (current_step == uint256(13)) {
      (T10 memory vvs) = abi.decode(current_svbs, (T10));
      
      
      return vvs.v342;
      
      
      }
    reachRequire((false), uint256(7) /*'invalid view_i'*/);
    }
  
  
  
  
  struct ApiRng {
    bool Any_contribute;
    bool Any_requestPayment;
    bool Contributor_register;
    }
  event PoolPhase_phase(T15 v0);
  event Update_info(address payable v0, uint256 v1);
  event _reach_oe_v404(bool v0);
  event _reach_oe_v460(bool v0);
  event _reach_oe_v507(bool v0);
  
  
  event _reach_e0(address _who, T12 _a);
  struct _F0 {
    uint256 v362;
    }
  constructor(T12 memory _a) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    _F0 memory _f;
    
    emit _reach_e0(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(8) /*'(./index.rsh:69:8:dot,[],"verify network token pay amount")'*/);
    reachRequire((((_a.msg.v342._penaltyAmt) == ((_a.msg.v342._contributionAmt) / uint256(2)))), uint256(9) /*'(./index.rsh:60:14:application,[at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)],Just "Penalty amount is not half of the contribution amount.")'*/);
    reachRequire((((_a.msg.v342._contributionAmt) > uint256(0))), uint256(10) /*'(./index.rsh:61:14:application,[at ./index.rsh:71:23:application call to "checkPoolStructure" (defined at: ./index.rsh:58:38:function exp)],Just "Contribution amount cannot be zero.")'*/);
    _f.v362 = (_a.msg.v342._contributionAmt) + (_a.msg.v342._penaltyAmt);
    T4 memory nsvs;
    nsvs.v341 = payable(msg.sender);
    nsvs.v342 = _a.msg.v342;
    nsvs.v345 = (_a.msg.v342._contributionAmt);
    nsvs.v346 = (_a.msg.v342._duration);
    nsvs.v347 = (_a.msg.v342._maxUsers);
    nsvs.v348 = (_a.msg.v342._penaltyAmt);
    nsvs.v362 = _f.v362;
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e1(address _who, T14 _a);
  
  function _reach_m1(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m1(_a, _r);
    }
  function _reach_m1(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(1)), uint256(13) /*'state step check at ./index.rsh:81:8:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(14) /*'state time check at ./index.rsh:81:8:dot'*/);
    current_step = 0x0;
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    
    
    emit _reach_e1(msg.sender, _a);
    reachRequire((msg.value == _svs.v362), uint256(11) /*'(./index.rsh:81:8:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(12) /*'(./index.rsh:81:8:dot,[],Just "sender correct")'*/);
    emit Update_info( payable(msg.sender),  _svs.v362);
    
    
    T4 memory nsvs;
    nsvs.v341 = _svs.v341;
    nsvs.v342 = _svs.v342;
    nsvs.v345 = _svs.v345;
    nsvs.v346 = _svs.v346;
    nsvs.v347 = _svs.v347;
    nsvs.v348 = _svs.v348;
    nsvs.v362 = _svs.v362;
    current_step = uint256(2);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e2(address _who, T14 _a);
  struct _F2 {
    T15 v374;
    }
  function _reach_m2(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m2(_a, _r);
    }
  function _reach_m2(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(2)), uint256(17) /*'state step check at ./index.rsh:85:8:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(18) /*'state time check at ./index.rsh:85:8:dot'*/);
    current_step = 0x0;
    (T4 memory _svs) = abi.decode(current_svbs, (T4));
    _F2 memory _f;
    
    emit _reach_e2(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(15) /*'(./index.rsh:85:8:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(16) /*'(./index.rsh:85:8:dot,[],Just "sender correct")'*/);
    _f.v374.which = _enum_T15.Registration;
    _f.v374._Registration = false;
    
    emit PoolPhase_phase( _f.v374);
    
    
    T18 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.svs.v347 = _svs.v347;
    la.svs.v348 = _svs.v348;
    la.msg.v375 = uint256(0);
    la.msg.v376 = uint256(block.number);
    la.msg.v383 = _svs.v362;
    l3(la);
    
    
    }
  
  
  function l3(T18 memory _a)  internal {
    
    
    if ((_a.msg.v375 <= _a.svs.v347)) {
      T10 memory nsvs;
      nsvs.v341 = _a.svs.v341;
      nsvs.v342 = _a.svs.v342;
      nsvs.v345 = _a.svs.v345;
      nsvs.v346 = _a.svs.v346;
      nsvs.v347 = _a.svs.v347;
      nsvs.v348 = _a.svs.v348;
      nsvs.v375 = _a.msg.v375;
      nsvs.v383 = _a.msg.v383;
      current_step = uint256(13);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      T21 memory la;
      la.svs.v341 = _a.svs.v341;
      la.svs.v342 = _a.svs.v342;
      la.svs.v345 = _a.svs.v345;
      la.svs.v346 = _a.svs.v346;
      la.msg.v414 = _a.msg.v376;
      la.msg.v421 = _a.msg.v383;
      l4(la);
      }
    
    }
  
  
  function l4(T21 memory _a)  internal {
    
    
    T6 memory nsvs;
    nsvs.v341 = _a.svs.v341;
    nsvs.v342 = _a.svs.v342;
    nsvs.v345 = _a.svs.v345;
    nsvs.v346 = _a.svs.v346;
    nsvs.v421 = _a.msg.v421;
    current_step = uint256(7);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e5(address _who, T14 _a);
  struct _F5 {
    T15 v518;
    }
  function _reach_m5(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m5(_a, _r);
    }
  function _reach_m5(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(5)), uint256(21) /*'state step check at ./index.rsh:198:8:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(22) /*'state time check at ./index.rsh:198:8:dot'*/);
    current_step = 0x0;
    (T5 memory _svs) = abi.decode(current_svbs, (T5));
    _F5 memory _f;
    
    emit _reach_e5(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(19) /*'(./index.rsh:198:8:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(20) /*'(./index.rsh:198:8:dot,[],Just "sender correct")'*/);
    _f.v518.which = _enum_T15.Finished;
    _f.v518._Finished = false;
    
    emit PoolPhase_phase( _f.v518);
    
    
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    
    
    }
  
  event _reach_e6(address _who, T14 _a);
  struct _F6 {
    T15 v427;
    }
  function _reach_m6(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m6(_a, _r);
    }
  function _reach_m6(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(7)), uint256(25) /*'state step check at ./index.rsh:132:12:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(26) /*'state time check at ./index.rsh:132:12:dot'*/);
    current_step = 0x0;
    (T6 memory _svs) = abi.decode(current_svbs, (T6));
    _F6 memory _f;
    
    emit _reach_e6(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(23) /*'(./index.rsh:132:12:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(24) /*'(./index.rsh:132:12:dot,[],Just "sender correct")'*/);
    _f.v427.which = _enum_T15.Contribution;
    _f.v427._Contribution = false;
    
    emit PoolPhase_phase( _f.v427);
    
    
    T23 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.msg.v430 = true;
    la.msg.v431 = uint256(block.number);
    la.msg.v438 = _svs.v421;
    l7(la);
    
    
    }
  
  struct _F7 {
    uint256 v445;
    uint256 v474;
    }
  function l7(T23 memory _a)  internal {
    _F7 memory _f;
    
    if (_a.msg.v430) {
      reachRequire(((((uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935) - _a.msg.v431) - _a.svs.v346) >= uint256(0))), uint256(27) /*'(reach standard library:567:15:application,[at reach standard library:575:29:application call to [unknown function] (defined at: reach standard library:564:55:function exp),at ./index.rsh:154:19:application call to "relativeTime" (defined at: reach standard library:570:71:function exp)],Nothing)'*/);
      _f.v445 = _a.msg.v431 + _a.svs.v346;
      T9 memory nsvs;
      nsvs.v341 = _a.svs.v341;
      nsvs.v342 = _a.svs.v342;
      nsvs.v345 = _a.svs.v345;
      nsvs.v346 = _a.svs.v346;
      nsvs.v438 = _a.msg.v438;
      nsvs.v445 = _f.v445;
      current_step = uint256(12);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _f.v474 = _a.msg.v431 + _a.svs.v346;
      T7 memory nsvs;
      nsvs.v341 = _a.svs.v341;
      nsvs.v342 = _a.svs.v342;
      nsvs.v345 = _a.svs.v345;
      nsvs.v346 = _a.svs.v346;
      nsvs.v438 = _a.msg.v438;
      nsvs.v474 = _f.v474;
      current_step = uint256(9);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    
    }
  
  event _reach_e8(address _who, T14 _a);
  
  function _reach_m8(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m8(_a, _r);
    }
  function _reach_m8(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(9)), uint256(30) /*'state step check at ./index.rsh:166:12:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(31) /*'state time check at ./index.rsh:166:12:dot'*/);
    current_step = 0x0;
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    
    reachRequire((uint256(block.number) >= _svs.v474), uint256(32) /*'timeout check at ./index.rsh:166:12:dot'*/);
    
    emit _reach_e8(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(28) /*'(./index.rsh:166:12:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(29) /*'(./index.rsh:166:12:dot,[],Just "sender correct")'*/);
    T8 memory nsvs;
    nsvs.v341 = _svs.v341;
    nsvs.v342 = _svs.v342;
    nsvs.v345 = _svs.v345;
    nsvs.v346 = _svs.v346;
    nsvs.v438 = _svs.v438;
    current_step = uint256(10);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e9(address _who, T14 _a);
  struct _F9 {
    T15 v487;
    }
  function _reach_m9(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m9(_a, _r);
    }
  function _reach_m9(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(10)), uint256(35) /*'state step check at ./index.rsh:172:12:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(36) /*'state time check at ./index.rsh:172:12:dot'*/);
    current_step = 0x0;
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    _F9 memory _f;
    
    emit _reach_e9(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(33) /*'(./index.rsh:172:12:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(34) /*'(./index.rsh:172:12:dot,[],Just "sender correct")'*/);
    _f.v487.which = _enum_T15.Payment;
    _f.v487._Payment = false;
    
    emit PoolPhase_phase( _f.v487);
    
    
    T8 memory nsvs;
    nsvs.v341 = _svs.v341;
    nsvs.v342 = _svs.v342;
    nsvs.v345 = _svs.v345;
    nsvs.v346 = _svs.v346;
    nsvs.v438 = _svs.v438;
    current_step = uint256(11);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    
    
    }
  
  event _reach_e10(address _who, T26 _a);
  
  function _reach_m10(T26 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m10(_a, _r);
    }
  function _reach_m10(T26 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(11)), uint256(38) /*'state step check at ./index.rsh:182:9:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(39) /*'state time check at ./index.rsh:182:9:dot'*/);
    current_step = 0x0;
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    
    
    emit _reach_e10(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(./index.rsh:182:9:dot,[],"verify network token pay amount")'*/);
    payable(msg.sender).transfer(_svs.v438);
    map1[payable(msg.sender)].which = _enum_T0.Some;
    map1[payable(msg.sender)]._Some = false;
    
    emit _reach_oe_v507( (false));
    _apiRet.Any_requestPayment = (false);
    
    T21 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.msg.v414 = uint256(block.number);
    la.msg.v421 = (_svs.v438 - _svs.v438);
    l4(la);
    
    
    }
  
  event _reach_e11(address _who, T28 _a);
  
  function _reach_m11(T28 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m11(_a, _r);
    }
  function _reach_m11(T28 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(12)), uint256(41) /*'state step check at ./index.rsh:140:23:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(42) /*'state time check at ./index.rsh:140:23:dot'*/);
    current_step = 0x0;
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    
    reachRequire((uint256(block.number) < _svs.v445), uint256(43) /*'timeout check at ./index.rsh:140:23:dot'*/);
    
    emit _reach_e11(msg.sender, _a);
    reachRequire((msg.value == _svs.v345), uint256(40) /*'(./index.rsh:140:23:dot,[],"verify network token pay amount")'*/);
    map2[payable(msg.sender)].which = _enum_T0.Some;
    map2[payable(msg.sender)]._Some = false;
    
    emit Update_info( payable(msg.sender),  _svs.v345);
    
    
    emit _reach_oe_v460( (false));
    _apiRet.Any_contribute = (false);
    
    T23 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.msg.v430 = true;
    la.msg.v431 = uint256(block.number);
    la.msg.v438 = (_svs.v438 + _svs.v345);
    l7(la);
    
    
    }
  
  event _reach_e12(address _who, T14 _a);
  
  function _reach_m12(T14 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m12(_a, _r);
    }
  function _reach_m12(T14 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(12)), uint256(46) /*'state step check at ./index.rsh:156:16:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(47) /*'state time check at ./index.rsh:156:16:dot'*/);
    current_step = 0x0;
    (T9 memory _svs) = abi.decode(current_svbs, (T9));
    
    reachRequire((uint256(block.number) >= _svs.v445), uint256(48) /*'timeout check at ./index.rsh:156:16:dot'*/);
    
    emit _reach_e12(msg.sender, _a);
    reachRequire((msg.value == uint256(0)), uint256(44) /*'(./index.rsh:156:16:dot,[at ./index.rsh:154:33:application call to [unknown function] (defined at: ./index.rsh:154:33:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v341 == payable(msg.sender))), uint256(45) /*'(./index.rsh:156:16:dot,[at ./index.rsh:154:33:application call to [unknown function] (defined at: ./index.rsh:154:33:function exp)],Just "sender correct")'*/);
    T23 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.msg.v430 = false;
    la.msg.v431 = uint256(block.number);
    la.msg.v438 = _svs.v438;
    l7(la);
    
    
    }
  
  event _reach_e13(address _who, T30 _a);
  
  function _reach_m13(T30 calldata _a) external payable {
    ApiRng memory _r;
    _reach_m13(_a, _r);
    }
  function _reach_m13(T30 memory _a, ApiRng memory _apiRet)  internal  {
    reachRequire((current_step == uint256(13)), uint256(50) /*'state step check at ./index.rsh:96:23:dot'*/);
    reachRequire(((_a.time == uint256(0)) || (current_time == _a.time)), uint256(51) /*'state time check at ./index.rsh:96:23:dot'*/);
    current_step = 0x0;
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    
    
    emit _reach_e13(msg.sender, _a);
    reachRequire((msg.value == _svs.v348), uint256(49) /*'(./index.rsh:96:23:dot,[],"verify network token pay amount")'*/);
    map0[payable(msg.sender)].which = _enum_T0.Some;
    map0[payable(msg.sender)]._Some = false;
    
    emit Update_info( payable(msg.sender),  _svs.v348);
    
    
    emit _reach_oe_v404( (false));
    _apiRet.Contributor_register = (false);
    
    T18 memory la;
    la.svs.v341 = _svs.v341;
    la.svs.v342 = _svs.v342;
    la.svs.v345 = _svs.v345;
    la.svs.v346 = _svs.v346;
    la.svs.v347 = _svs.v347;
    la.svs.v348 = _svs.v348;
    la.msg.v375 = (_svs.v375 + uint256(1));
    la.msg.v376 = uint256(block.number);
    la.msg.v383 = (_svs.v383 + _svs.v348);
    l3(la);
    
    
    }
  
  
  function Any_contribute()  external payable returns (bool ) {
    ApiRng memory _r;
    T28 memory _t;
    _t.msg = T27(false);
    _reach_m11(_t, _r);
    return _r.Any_contribute;
    }
  
  function Any_requestPayment()  external payable returns (bool ) {
    ApiRng memory _r;
    T26 memory _t;
    _t.msg = T25(false);
    _reach_m10(_t, _r);
    return _r.Any_requestPayment;
    }
  
  function Contributor_register()  external payable returns (bool ) {
    ApiRng memory _r;
    T30 memory _t;
    _t.msg = T29(false);
    _reach_m13(_t, _r);
    return _r.Contributor_register;
    }
  
  
  receive () external payable {}
  fallback () external payable {}
  
  }
